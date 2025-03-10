import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FileData {
  id: number; // Assurez-vous que cela correspond à votre structure de données
  filename: string; // Nom du fichier
  type: string;
  data?: string; // Optionnel si vous stockez le contenu en base64 ou un chemin vers le fichier
}

// src/app/models/dossier.model.ts
export interface Dossier {
  id: string;
  commune: string;
  dateFin: string;
  kmCategorie: string;
  isControlled: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class AppService {


  private dossiers: Dossier[] = [
    {
      id: '#0239675',
      commune: 'MAZAN',
      dateFin: '26/11/2024',
      kmCategorie: 'High KM(>50)',
      isControlled: true
    },
    {
      id: '#0239676',
      commune: 'LE BARP',
      dateFin: '15/11/2024',
      kmCategorie: 'Medium KM(20-50)',
      isControlled: false
    },
    {
      id: '#0239973',
      commune: 'AVENSAN',
      dateFin: 'Rent',
      kmCategorie: 'xxxxxx',
      isControlled: true
    },
    {
      id: '#0239972',
      commune: 'IFFENDIC',
      dateFin: 'Rent',
      kmCategorie: 'xxxxxx',
      isControlled: true
    }
  ];

  private apiUrl = 'http://localhost:8084/sof/api/files/upload'; // URL du backend

  private apiGet = 'http://localhost:8084/sof/api/files/all'; // URL du backend*

  private apiGetById = 'http://localhost:8084/sof/api/'; // URL du backend


  constructor(private http: HttpClient) {}


  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(this.apiUrl, formData);
  }

  getAllFiles(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${this.apiGet}/all`);
  }
  
  // Récupérer un fichier spécifique
  getFileContent(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiGet}/files/${filename}`, {
      responseType: 'blob' // Récupérer le contenu sous forme de Blob
    });
  }

//   getFileContent(filename: string): Observable<string> {
//     return this.http.get(`${this.apiGet}/content/${filename}`, {
//       responseType: 'text', // Important pour récupérer du texte brut
//     });

// }

// file.service.ts
getDownloadUrl(file: FileData): string {
  return `${this.apiGetById}/download/${file.id}`;
}


getPDF(): Observable<Blob> {
  return this.http.get(this.apiGet, { responseType: 'blob' });
}

private dossiersSubject = new BehaviorSubject<Dossier[]>(this.dossiers);


getDossiers(): Observable<Dossier[]> {
  return this.dossiersSubject.asObservable();
}

toggleDossierStatus(id: string): void {
  this.dossiers = this.dossiers.map(dossier => 
    dossier.id === id 
      ? { ...dossier, isControlled: !dossier.isControlled }
      : dossier
  );
  this.dossiersSubject.next(this.dossiers);
}

}