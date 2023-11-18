import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrarUsersComponent } from './registrar-users/registrar-users.component';
import { ListadoUsersComponent } from './listado-users/listado-users.component';
import { RegistrarBooksComponent } from './registrar-books/registrar-books.component';
import { ListadoBooksComponent } from './listado-books/listado-books.component';
import { authGuard } from './guards/auth.guard';
import { Utils } from './utils/utils';
import { deactivateGuard } from './auth/deactivate.guard';
import { RestrictedComponent } from 'src/app/restricted/restricted.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'registro', component: RegistrarseComponent,
    canDeactivate:[deactivateGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'dashboard/search/searching/books/book/:isbn', redirectTo: '/dashboard/books/book/:isbn', pathMatch: 'full' },
  
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '', redirectTo: '/dashboard/books', pathMatch: 'full'
      },
      {
        path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)

      },
      {
        path: 'admin', component:AdminComponent,
        canMatch: [()=> Utils.isRole('admin')]
      },
      {
        path: 'registrarUser',component:RegistrarUsersComponent,
        canDeactivate:[deactivateGuard],
        canMatch: [()=> Utils.isRole('admin')]
      },
      {
        path: 'listadoUsers',component:ListadoUsersComponent,
        canMatch: [()=> Utils.isRole('admin')]
      },
      {
        path: 'registrarBooks',component:RegistrarBooksComponent,
        canDeactivate:[deactivateGuard],
        canMatch: [()=> Utils.isRole('admin')]
      },
      {
        path:'listadoBooks', component:ListadoBooksComponent,
        canMatch: [()=> Utils.isRole('admin')]
      },
    ]
  },
  {
    path: 'restricted', component: RestrictedComponent
  },
  {
    path: 'logout', redirectTo: '/login', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
