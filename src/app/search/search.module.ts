import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchVarComponent } from './search-var/search-var.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchVarComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],exports:[
    SearchVarComponent
  ]
})
export class SearchModule { }
