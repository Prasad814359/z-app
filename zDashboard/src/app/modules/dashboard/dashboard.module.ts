import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLandingPageComponent } from './pages/dashboard-landing-page/dashboard-landing-page.component';


@NgModule({
  declarations: [
    DashboardLandingPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
