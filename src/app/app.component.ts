import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppService } from './Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  pdfData?: any;
  currentPage = 1;
  totalPages = 1;

  constructor(private pdfService: AppService) {}

  loadingError = false;

  async ngOnInit() {
    try {
      this.pdfData = await this.pdfService.getPDF();
      this.totalPages = this.getPdfTotalPages();
    } catch (error) {
      this.loadingError = true;
      console.error('Error loading PDF:', error);
    }
  }

  getPdfTotalPages(): number {
    return 10; // Replace with the actual total pages count
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}