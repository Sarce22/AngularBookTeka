import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsersRoutingModule } from './listado-users-routing.module';
import { ListadoUsersComponent } from './listado-users.component';


@NgModule({
  declarations: [
    ListadoUsersComponent
  ],
  imports: [
    CommonModule,
    ListadoUsersRoutingModule
  ]
})
export class ListadoUsersModule { }
