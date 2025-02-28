import { Component, OnInit, Pipe } from '@angular/core';
import { AppService, FileData } from '../Services/app.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-files',
  standalone:false,
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})

export class FilesComponent implements OnInit {
  binaryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.binaryForm = this.fb.group({
      fields: this.fb.array([])
    });
  }

  ngOnInit() {
    // Création des 8 champs initiaux
    for (let i = 0; i < 8; i++) {
      this.addField();
    }
  }

  get fields() {
    return this.binaryForm.get('fields') as FormArray;
  }

  addField() {
    const field = this.fb.group({
      value: ['', [Validators.required, Validators.min(0), Validators.max(1)]]
    });
    this.fields.push(field);
  }

  onSubmit() {
    if (this.binaryForm.valid) {
      console.log(this.binaryForm.value);
      // Ajoutez ici votre logique de traitement
    }
  }

  onReset() {
    this.binaryForm.reset();
  }
}















































//yekhdem --------------------------------------


//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.selectedFile = input.files[0];
//     }
//   }

  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     console.log('Envoi du fichier :', this.selectedFile.name);
  //     this.fileUploadService.uploadFile(this.selectedFile).subscribe({
  //       next: (response) => {
  //         console.log('Réponse du serveur :', response);
  //         this.uploadMessage = response;
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de l\'upload :', err);
  //         this.uploadMessage = 'Erreur lors de l\'upload du fichier.';
  //       }
  //     });
  //   } else {
  //     console.warn('Aucun fichier sélectionné.');
  //     this.uploadMessage = 'Veuillez sélectionner un fichier.';
  //   }
  // }

//   ngOnInit(): void {
//     this.loadFiles();
//   }

//   loadFiles(): void {
//     this.fileUploadService.getAllFiles().subscribe({
//       next: (data) => {
//         this.files = data;
//       },
//       error: (error) => {
//         console.error('Erreur lors de la récupération des fichiers :', error);
//         this.errorMessage = 'Erreur lors de la récupération des fichiers.';
//       }
//     });
//   }

//   displayFileContent(file: FileData): void {
//     if (file.data) {
//       this.selectedFileContent = atob(file.data); // Utilisez atob si le contenu est en base64
//     } else {
//       this.selectedFileContent = 'Le contenu du fichier n’est pas disponible.';
//     }
//   }
// }
  


