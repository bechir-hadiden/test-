import { Component, OnInit } from '@angular/core';
import { AppService, Dossier } from '../Services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listtt',
  templateUrl: './listtt.component.html',
  styleUrl: './listtt.component.css'
})
export class ListttComponent implements OnInit {
  dossiers$: Observable<Dossier[]>;
  showControlled = false;

  constructor(private dossierService: AppService) {
    this.dossiers$ = this.dossierService.getDossiers();
  }

  ngOnInit(): void {}

  onToggleFilter(event: any): void {
    this.showControlled = event.target.checked;
  }

  onToggleDossier(id: string): void {
    this.dossierService.toggleDossierStatus(id);
  }

}