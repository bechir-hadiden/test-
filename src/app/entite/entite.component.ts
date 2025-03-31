import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement';
import { AppService } from '../Services/app.service';
import saveAs from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-entite',
  templateUrl: './entite.component.html',
  styleUrl: './entite.component.css'
})
export class EntiteComponent  implements OnInit {
  departements: Departement[] = [];
  errorMessage: string = '';

  constructor(private departementService: AppService) {}

  ngOnInit(): void {
    this.chargerDepartements();
  }

  chargerDepartements(): void {
    this.departementService.getAllFiles().subscribe({
      next: (data) => {
        this.departements = data;
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du chargement des départements.";
        console.error(error);
      }
    });
  }


  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.departements);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Départements');
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
  
    saveAs(data, 'departements.xlsx');
  }
  

  exportToPDF() {
    const doc = new jsPDF();
    const headers = [Object.keys(this.departements[0])]; // Récupère les noms des colonnes dynamiquement
    const data = this.departements.map(obj => Object.values(obj)); // Récupère les valeurs des objets
  
    doc.text('📋 Liste des Départements', 10, 10);
    autoTable(doc, { head: headers, body: data, startY: 20 });
  
    doc.save('departements.pdf');
  }
  

  
  
  
}