import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarseRoutingModule } from './registrarse-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegistrarseComponent],
  imports: [
    CommonModule,
    RegistrarseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],exports:[RegistrarseComponent]
})
export class RegistrarseModule { }
