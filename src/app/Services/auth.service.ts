import { Injectable } from '@angular/core';
import { compte } from '../model/compte.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user : compte[] ;
userCourant!:string ; 
roleCourant!: string ; 
isConnected: boolean = false ; 
role!:string ; 

constructor(private router: Router) { 
  this. testerAdmin()
  this.user = [
    {
      email: 'admin@gmail.com',
      Mot_pass: 'azerty',
      nom: 'Administrateur',
      role: 'ADMIN'
    },
    {
      email: 'bechirhadiden@gmail.com',
      Mot_pass: 'azerty',
      nom: 'bechir',
      role: 'AGENT'
    }
  ];
}

  connect(user : compte) : boolean {
    console.log(user);
    
    this.user.forEach((unUser) => {
    if(unUser.email==user.email && unUser.Mot_pass==user.Mot_pass)   { 
    this.isConnected = true 
    this.userCourant = unUser.nom
    this.role = unUser.role
    console.log("Connexion de "+this.userCourant+  " - role :"+this.role)
    localStorage.setItem('userCourant',this.userCourant)
    localStorage.setItem('role',this.role)
    localStorage.setItem('isConnected',String(this.isConnected))
    
    
 
    }
    else {
      console.log("One or more objects or properties are undefined.");
  }
    });
    return this.isConnected
    }
    disconnect() {
    this.isConnected = false 
    this.userCourant = ""
    this.role = ""
    this.router.navigate(['/connect'])
    localStorage.removeItem('roleCourant')
    localStorage.removeItem('isConnected')
    localStorage.removeItem('role')

    }
    testerAdmin():boolean{
      
      console.log("🚀 ~ file: auth.service.ts:75 ~ AuthService ~ testerAdmin ~ this.role:", this.role)
      return localStorage.getItem('role')=='ADMIN'
  
     
   }
   calculNbUsers ():number{
    return this.user.length
   
  }
}
