import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarUsersRoutingModule } from './registrar-users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarUsersComponent } from './registrar-users.component';


@NgModule({
  declarations: [RegistrarUsersComponent],
  imports: [
    CommonModule,
    RegistrarUsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],exports:[RegistrarUsersComponent]
})
export class RegistrarUsersModule { }
