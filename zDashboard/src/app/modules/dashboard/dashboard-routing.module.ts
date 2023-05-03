import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLandingPageComponent } from './pages/dashboard-landing-page/dashboard-landing-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: DashboardLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
