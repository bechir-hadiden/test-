import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface Filter {
  field: string;
  fieldLabel: string;
}

interface FilterColumns {
  [key: string]: string[]; // Clés de type string, valeurs de type tableau de string
}
 
@Component({
  selector: 'app-criter',
  templateUrl: './criter.component.html',
  styleUrl: './criter.component.css'
})
export class CriterComponent implements OnInit {
  filterForm: FormGroup;       // Formulaire pour sélectionner les critères
  valueForm: FormGroup;        // Formulaire pour saisir les valeurs
  @Output() filterChanged = new EventEmitter<{ [key: string]: (string | number)[] | null }>();

  // Liste des faces et leurs critères
  filterColumns = {
    recalage: ['commune', 'dateLivraison', 'categorie'],
    brame: ['collaborateur', 'dateLivraison', 'dateControle'],
    desat: ['collaborateur', 'dateLivraison', 'dateControle'],
    nropm: ['collaborateur', 'dateLivraison', 'dateControle']
  };

  faceKeys = Object.keys(this.filterColumns); // Liste des noms de faces
  currentFilterColumns: string[] = []; // Critères de la face sélectionnée
  selectedFilters: Filter[] = []; // Critères sélectionnés
  optionsVisible = false; // Indicateur pour afficher les options
  selectedField: string = ''; // Champ actuellement sélectionné pour l'affichage des options

  constructor(private fb: FormBuilder) {
    // Initialisation des formulaires
    this.filterForm = this.fb.group({
      face: [''],
      field: ['']
    });

    this.valueForm = this.fb.group({});
  }

  ngOnInit(): void {
    // Lorsque la face est changée, mettre à jour les options de filtre
    this.filterForm.get('face')?.valueChanges.subscribe(() => this.updateFilterOptions());
  }

  /** Met à jour les critères disponibles selon la face sélectionnée */
  updateFilterOptions(): void {
    const selectedFace = this.filterForm.get('face')?.value as keyof typeof this.filterColumns;
    this.currentFilterColumns = selectedFace ? this.filterColumns[selectedFace] : [];
    this.filterForm.get('field')?.reset();
  }

  /** Ajoute un critère à la sélection */
  addFilter(): void {
    const selectedField = this.filterForm.get('field')?.value;

    // Vérifie si le critère n'est pas déjà sélectionné
    if (selectedField && !this.selectedFilters.find(f => f.field === selectedField)) {
      const fieldLabel = selectedField.charAt(0).toUpperCase() + selectedField.slice(1); // Mettre en majuscule le premier caractère
      this.selectedFilters.push({ field: selectedField, fieldLabel });

      // Ajouter un champ dynamique dans le formulaire des valeurs
      this.valueForm.addControl(selectedField, this.fb.control([]));
      this.filterForm.get('field')?.reset(); // Réinitialise le champ de sélection
    }
  }

  /** Supprime un critère de la sélection */
  removeFilter(filterToRemove: Filter): void {
    this.selectedFilters = this.selectedFilters.filter(filter => filter !== filterToRemove);
    this.valueForm.removeControl(filterToRemove.field); // Supprime le champ associé
  }

  /** Retourne les options associées à un champ donné */
  getFilterOptions(field: string): (string | number)[] {
    const optionsData: { [key: string]: (string | number)[] } = {
      commune: ['Paris', 'Lyon', 'Marseille'],
      dateLivraison: ['2025-04-01', '2025-05-10', '2025-06-15'],
      categorie: ['Standard', 'Premium'],
      collaborateur: ['Alice', 'Bob', 'Charlie'],
      dateControle: ['2025-03-15', '2025-04-20']
    };

    return optionsData[field] || []; // Retourne les options ou un tableau vide
  }

  /** Montre les options pour le champ sélectionné */
  showOptions(field: string): void {
    this.selectedField = field;
    this.optionsVisible = true; // Affiche les options
  }

  /** Remplit le champ avec la valeur sélectionnée */
  selectOption(option: string | number, field: string): void {
    this.valueForm.get(field)?.setValue(option); // Remplit le champ avec l'option sélectionnée
    this.optionsVisible = false; // Cache les options
  }

  /** Applique les filtres sélectionnés */
  applyFilters(): void {
    const filtersData = Object.keys(this.valueForm.value).reduce((acc, key) => {
      const values = this.valueForm.get(key)?.value;
      if (values && values.length > 0) {
        acc[key] = values; // Ajoute les valeurs au tableau
      }
      return acc;
    }, {} as { [key: string]: (string | number)[] | null });

    this.filterChanged.emit(filtersData); // Émet les données de filtrage
  }

  /** Réinitialise tous les filtres */
  resetFilters(): void {
    this.selectedFilters = [];
    this.valueForm.reset(); // Réinitialise le formulaire des valeurs

    // Supprime tous les contrôles de filtre du formulaire des valeurs
    Object.keys(this.valueForm.controls).forEach(key => {
      this.valueForm.removeControl(key);
    });

    this.filterChanged.emit({}); // Émet une valeur vide pour réinitialiser les filtres
  }
}