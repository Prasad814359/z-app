import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobDetailLandingPageComponent } from './pages/job-detail-landing-page/job-detail-landing-page.component'

const routes: Routes = [
  {
    path: '',
    component: JobDetailLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDetailRoutingModule { }
