import { Component, OnInit } from '@angular/core';
import { Dossier } from '../Services/app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  dossiers: Dossier[] = [
    {
      id: '#0239675',
      commune: 'MAZAN',
      dateFin: '26/11/2024',
      kmCategorie: 'High KM(>50)',
      etat: 'Contrôlé'
    },
    {
      id: '#0239675',
      commune: 'LE BARP',
      dateFin: '15/11/2024',
      kmCategorie: 'Medium KM(20-50)',
      etat: 'Non contrôlé'
    },
    {
      id: '#0239973',
      commune: 'AVENSAN',
      dateFin: 'Rent',
      kmCategorie: 'xxxxxx',
      etat: 'Contrôlé'
    },
    {
      id: '#0239972',
      commune: 'IFFENDIC',
      dateFin: 'Rent',
      kmCategorie: 'xxxxxx',
      etat: 'Contrôlé'
    }
  ];

  startControl(dossier: Dossier): void {
    if (dossier.etat === 'Non contrôlé') {
      // Logique de contrôle ici
      console.log(`Démarrage du contrôle pour le dossier ${dossier.id}`);
      dossier.etat = 'Contrôlé';
    }
  }
}