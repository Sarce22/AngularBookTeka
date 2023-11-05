import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BooksModule } from './books/books.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrarseModule } from './registrarse/registrarse.module';
import { AdminComponent } from './admin/admin.component';
import { RegistrarUsersComponent } from './registrar-users/registrar-users.component';
import { ListadoUsersComponent } from './listado-users/listado-users.component';
import { RegistrarUsersModule } from './registrar-users/registrar-users.module';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BooksModule,
    DashboardModule,
    RegistrarseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
