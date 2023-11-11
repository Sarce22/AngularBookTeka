import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarBooksRoutingModule } from './registrar-books-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarBooksComponent } from './registrar-books.component';


@NgModule({
  declarations: [RegistrarBooksComponent],
  imports: [
    CommonModule,
    RegistrarBooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],exports:[RegistrarBooksComponent]
})
export class RegistrarBooksModule { }
