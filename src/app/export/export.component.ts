import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {

// Données du tableau
data = [
  { nom: 'Jean Dupont', email: 'jean.dupont@example.com', telephone: '0123456789' },
  { nom: 'Alice Martin', email: 'alice.martin@example.com', telephone: '0987654321' },
  { nom: 'Marc Durand', email: 'marc.durand@example.com', telephone: '0555123456' }
];

// Exporter en PDF
exportToPDF() {
  const doc = new jsPDF();
  const headers = [['Nom', 'Email', 'Téléphone']];
  const data = this.data.map(row => [row.nom, row.email, row.telephone]);

  doc.text('Liste des utilisateurs', 10, 10);
  autoTable(doc, { head: headers, body: data, startY: 20 });

  doc.save('tableau.pdf');
}

// Exporter en Excel
exportToExcel() {
  const worksheet = XLSX.utils.json_to_sheet(this.data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Feuille1');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(data, 'tableau.xlsx');
}
}