import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FilterCriteria } from '../model/FilterCriteria';


interface Filter {
  field: string;
  value: string | number | null;
}

interface FilterOption {
  label: string;
  value: string;
  type: string;
  options: (string | number)[];
} 

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrl: './calendrier.component.css'
})
export class CalendrierComponent  { 
  filterForm: FormGroup;
  @Output() filterChanged = new EventEmitter<{ [key: string]: string | number | (string | number)[] | null }>();

  // Liste constante de critères de filtrage
  filterOptions = [
    { label: 'Prix', value: 'price', type: 'number', options: [100, 200, 300] },
    { label: 'Quantité', value: 'quantity', type: 'number', options: [1, 2, 3, 4] },
    { label: 'Date de Livraison', value: 'deliveryDate', type: 'date', options: ['2025-04-01', '2025-05-10', '2025-06-15'] }
  ];

  // Liste des filtres choisis par l'utilisateur
  selectedFilters: Filter[] = [];
  currentOptions: (string | number)[] = []; // Propriété pour stocker les options actuelles

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      field: [''],
      value: [[]] // Initialisé en tant que tableau vide pour les sélections multiples
    });
  }

  ngOnInit(): void {
    // Écoute les changements du champ 'field' pour mettre à jour les options correspondantes
    this.filterForm.get('field')?.valueChanges.subscribe(selectedField => {
      const foundField = this.filterOptions.find(f => f.value === selectedField);
      this.currentOptions = foundField ? foundField.options : [];
      this.filterForm.get('value')?.setValue([]); // Réinitialise la valeur sélectionnée
    });
  }

  // Méthode pour ajouter le filtre
  addFilter(): void {
    const selectedField = this.filterForm.get('field')?.value;
    const selectedValues = this.filterForm.get('value')?.value;

    // Vérifie si un champ et au moins une valeur sont sélectionnés
    if (selectedField && selectedValues.length > 0) {
      this.selectedFilters.push({ field: selectedField, value: selectedValues });
      this.filterForm.reset(); // Réinitialise le formulaire après l'ajout
      this.currentOptions = []; // Réinitialise les options
      this.applyFilters(); // Émet les filtres
    }
  }

  // Méthode pour appliquer les filtres
  applyFilters(): void {
    const filtersData = this.selectedFilters.reduce((acc, filter) => {
      acc[filter.field] = filter.value;
      return acc;
    }, {} as { [key: string]: string | number | (string | number)[] | null });

    this.filterChanged.emit(filtersData); // Émet les filtres
  }

  // Méthode pour réinitialiser les filtres
  resetFilters(): void {
    this.selectedFilters = []; // Réinitialise les filtres choisis
    this.filterChanged.emit({}); // Émet les filtres réinitialisés
  }



}

