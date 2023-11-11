import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BooksModule } from './books.module';

const routes: Routes = [

  {
    path:'',component:InicioComponent
  },
  {
    path:'book/:isbn',component:ViewBookComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
