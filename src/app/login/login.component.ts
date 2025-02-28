import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AppService, private router: Router) { }


  
  // onLoggedin() {
  //   this.authService.login(this.user).subscribe({
  //     next: (response) => {
  //       const token = response.headers.get('Authorization');
  //       if (token) {
  //         this.authService.saveToken(token);
  //         this.router.navigate(['/departement']);
  //         console.log("slm");
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error); // Ajoutez cette ligne pour inspecter l'objet d'erreur
  //       this.err = 1;
  //       if (error.error && error.error.errorCause === 'disabled') {
  //         this.message = "Utilisateur désactivé, Veuillez contacter votre Administrateur";
  //       } else {
  //         this.message = "login ou mot passe erronés";
  //       }
  //     }
  //   });
  // }
  


    // saveToken(token: string): void {
    //   localStorage.setItem('jwtToken', token);
    // }
  
    // getToken(): string | null {
    //   return localStorage.getItem('jwtToken');
    // }

}