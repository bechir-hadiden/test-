import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criter',
  templateUrl: './criter.component.html',
  styleUrl: './criter.component.css'
})
export class CriterComponent implements OnInit {
  critereForm: FormGroup;
  prestations: string[] = ['Prestation 1', 'Prestation 2', 'Prestation 3']; // À adapter selon vos besoins
  closeMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.critereForm = this.fb.group({
      label: ['', Validators.required],
      prestation: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.critereForm.valid) {
      console.log(this.critereForm.value);
      // Ajoutez ici la logique pour sauvegarder les données
    }
  }

  onAnnuler(): void {
    this.critereForm.reset();
  }

  onClose() {
    this.closeMessage = 'The alert has been closed';
  }
}