import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [DashboardComponent, FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidenavModule
  ], exports: [DashboardComponent]
})
export class DashboardModule { }
