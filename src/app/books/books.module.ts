import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { CategoryBookComponent } from './category-book/category-book.component';



@NgModule({
  declarations: [
    InicioComponent,
    ViewBookComponent,
    CategoryBookComponent,
   
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { 
  
}
