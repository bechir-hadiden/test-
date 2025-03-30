import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './safe-url.pipe';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListttComponent } from './listtt/listtt.component';
import { UpdateComponent } from './update/update.component';
import { UpdateintervalleComponent } from './updateintervalle/updateintervalle.component';
import { ListdesatComponent } from './listdesat/listdesat.component';
import { CriterComponent } from './criter/criter.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UpComponent } from './up/up.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button'; // Import du module de PrimeNG

import { DialogModule } from 'primeng/dialog';
import { ExportComponent } from './export/export.component'; // Import du module de PrimeNG


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    SafeUrlPipe,
    LoginComponent,
    TestComponent,
    ListttComponent,
    UpdateComponent,
    UpdateintervalleComponent,
    ListdesatComponent,
    CriterComponent,
    UpComponent,
    CalendrierComponent,
    ExportComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), // Import du module Datepicker
    FormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
