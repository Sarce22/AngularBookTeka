import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
   
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { 
  
}
