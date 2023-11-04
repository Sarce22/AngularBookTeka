import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchVarComponent } from './search-var/search-var.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SearchVarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],exports:[
    SearchVarComponent,
    SearchComponent
  ]
})
export class SearchModule { }
