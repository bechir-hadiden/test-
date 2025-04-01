import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ListttComponent } from './listtt/listtt.component';
import { UpdateComponent } from './update/update.component';
import { UpdateintervalleComponent } from './updateintervalle/updateintervalle.component';
import { CriterComponent } from './criter/criter.component';
import { UpComponent } from './up/up.component';
import { ExportComponent } from './export/export.component';
import { EntiteComponent } from './entite/entite.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

const routes: Routes = [

  {path:'files' , component:FilesComponent},
  {path:'login' , component:LoginComponent},
  {path:'test' , component:TestComponent},
  {path:'lista' , component:ListttComponent},
  {path:'update' , component:UpdateComponent},
  {path:'intervalle' , component:UpdateintervalleComponent},
  {path:'critere' , component:CriterComponent},
  {path:'export' , component:ExportComponent},
  {path:'calendrier' , component:CalendrierComponent},

  {path:'entite' , component:EntiteComponent},

  {path:'up' , component:UpComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
