import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrl: './up.component.css'
})
export class UpComponent {

  showMonths: boolean = false; // Gérer l'affichage du calendrier
  selectedMonth: string = ''; // Mois sélectionné

  months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  toggleCalendar() {
    this.showMonths = !this.showMonths;
  }

  selectMonth(month: string) {
    this.selectedMonth = month;
    this.showMonths = false; // Cacher le calendrier après sélection
  }
}
