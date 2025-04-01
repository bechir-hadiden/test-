import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface FilterOption {
  label: string;
  value: string;
  options: (string | number)[];
}

interface Filter {
  field: string;
  fieldLabel: string;
}

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  filterForm: FormGroup;
  valueForm: FormGroup;
  @Output() filterChanged = new EventEmitter<{ [key: string]: (string | number)[] | null }>();

  filterOptions: FilterOption[] = [
    { label: 'Prix', value: 'price', options: [100, 200, 300] },
    { label: 'Quantité', value: 'quantity', options: [1, 2, 3, 4] },
    { label: 'Date de Livraison', value: 'deliveryDate', options: ['2025-04-01', '2025-05-10', '2025-06-15'] }
  ];

  selectedFilters: Filter[] = [];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      field: ['']
    });

    this.valueForm = this.fb.group({});
  }

  ngOnInit(): void {}

  /** Ajoute un critère de filtrage */
  addFilter(): void {
    const selectedField = this.filterForm.get('field')?.value;

    if (selectedField && !this.selectedFilters.find(f => f.field === selectedField)) {
      const fieldLabel = this.getFilterLabel(selectedField);
      this.selectedFilters.push({ field: selectedField, fieldLabel });

      // Ajouter un champ dynamique dans le formulaire des valeurs
      this.valueForm.addControl(selectedField, this.fb.control([]));

      this.filterForm.reset(); // Réinitialise le formulaire de critère
    }
  }

  /** Supprime un critère */
  removeFilter(filterToRemove: Filter): void {
    this.selectedFilters = this.selectedFilters.filter(filter => filter !== filterToRemove);

    // Supprime le champ du formulaire des valeurs
    this.valueForm.removeControl(filterToRemove.field);
  }

  /** Récupère les options disponibles pour un champ donné */
  getFilterOptions(field: string): (string | number)[] {
    return this.filterOptions.find(option => option.value === field)?.options || [];
  }

  /** Applique les filtres sélectionnés */
  applyFilters(): void {
    const filtersData = Object.keys(this.valueForm.value).reduce((acc, key) => {
      const values = this.valueForm.get(key)?.value;
      if (values && values.length > 0) {
        acc[key] = values;
      }
      return acc;
    }, {} as { [key: string]: (string | number)[] | null });

    this.filterChanged.emit(filtersData);
  }

  /** Réinitialise tous les filtres */
  resetFilters(): void {
    this.selectedFilters = [];
    this.valueForm.reset();

    Object.keys(this.valueForm.controls).forEach(key => {
      this.valueForm.removeControl(key);
    });

    this.filterChanged.emit({});
  }

  /** Retourne le libellé d'un champ */
  getFilterLabel(fieldValue: string): string {
    return this.filterOptions.find(option => option.value === fieldValue)?.label || fieldValue;
  }
}
