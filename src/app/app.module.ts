import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './safe-url.pipe';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListttComponent } from './listtt/listtt.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    SafeUrlPipe,
    LoginComponent,
    TestComponent,
    ListttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule , 
    ReactiveFormsModule,
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule ,  // Assurez-vous que ce module est importé


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
