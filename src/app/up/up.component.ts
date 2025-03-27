import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DialogModule } from 'primeng/dialog';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrl: './up.component.css'
})
export class UpComponent {
  visible = false;
  categorie: any = {};
  categories: any[] = [];
  message = '';

  constructor(private appService: AppService) {}

  // Sélection d'une catégorie pour modification
  onSelectCategorie(cat: any) {
    this.categorie = { ...cat };
    this.visible = true;
  }

  // Mise à jour de la catégorie
  updateIntervalle() {
    if (this.categorie.min >= this.categorie.max) {
      this.message = 'La valeur minimale doit être inférieure à la valeur maximale.';
      return;
    }

    this.appService.updateCategorie(this.categorie).subscribe({
      next: () => {
        this.message = 'Catégorie mise à jour avec succès.';
        this.refreshCategories(); // Actualiser la liste
        this.visible = false;
      },
      error: () => {
        this.message = 'Erreur lors de la mise à jour.';
      }
    });
  }

  // Suppression d'une catégorie
  deleteCategorie(id: number) {
    this.appService.deleteCategorie(id).subscribe({
      next: () => {
        this.message = 'Catégorie supprimée avec succès.';
        this.refreshCategories();
      },
      error: () => {
        this.message = 'Erreur lors de la suppression.';
      }
    });
  }

  // Actualiser la liste des catégories
  refreshCategories() {
    this.appService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
