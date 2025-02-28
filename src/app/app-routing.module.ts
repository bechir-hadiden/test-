import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ListttComponent } from './listtt/listtt.component';

const routes: Routes = [

  {path:'files' , component:FilesComponent},
  {path:'login' , component:LoginComponent},
  {path:'test' , component:TestComponent},
  {path:'lista' , component:ListttComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
