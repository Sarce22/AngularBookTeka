import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path:'registro', component:RegistrarseComponent
  },

  {
    path:'login', component:LoginComponent
  },

  

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard/books', pathMatch: 'full'
      },
      {
        path: 'books', loadChildren: () => import('./books/books.module').then(m=>m.BooksModule)
      },
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      }
    ]
  },
  {
    path: 'logout', redirectTo:'/login', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
