import { Component, OnInit } from '@angular/core';
import { Dossiezr } from '../model/dossier';
@Component({
  selector: 'app-listdesat',
  templateUrl: './listdesat.component.html',
  styleUrl: './listdesat.component.css'
})


export class ListdesatComponent  implements OnInit {


  dossiers: DossierDesat[] = [
    {
      unite: 'RIPKFIEX DTAG',
      cog: 'BRAMOT-ESMI310-01',
      collaborateur: 'Ranim Yousfi',
      dateLivraison: new Date('2025-01-07'),
      dateControle: new Date('2025-01-15'),
      phase: 'Pré-étude',
      etat: 'Controlé'
    },
    // Ajout des autres dossiers de l'image
    {
      unite: 'RIPKFIEX DTAG',
      cog: 'BRAMOT-ESMI310-01',
      collaborateur: 'Ranim Yousfi',
      dateLivraison: new Date('2025-01-07'),
      dateControle: new Date('2025-01-15'),
      phase: 'Creation IBM',
      etat: 'Non controlé'
    },
    {
      unite: 'RIPKFIEX DTAG',
      cog: 'AVENSAN',
      collaborateur: 'Ranim Yousfi',
      dateLivraison: new Date('2025-01-07'),
      dateControle: new Date('2025-01-21'),
      phase: 'Etude',
      etat: 'Non controlé'
    },
    {
      unite: 'RIPKFIEX DTAG',
      cog: 'IFFENDIC',
      collaborateur: 'Ranim Yousfi',
      dateLivraison: new Date('2025-01-07'),
      dateControle: new Date('2025-01-15'),
      phase: 'Raccoredement',
      etat: 'Controlé'
    }
  ];
  selectedBrame: string = 'BRAME';

  constructor() {}

  ngOnInit(): void {}

  commencerControle(): void {
    // Logique pour commencer un nouveau contrôle
  }

  modifierCritere(): void {
    // Logique pour modifier les critères
  }

  exporterPDF(): void {
    // Logique pour exporter en PDF
  }

  trierDossiers(): void {
    // Logique de tri
  }
}