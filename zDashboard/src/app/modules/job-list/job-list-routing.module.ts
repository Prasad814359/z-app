import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobListLandingPageComponent } from './pages/job-list-landing-page/job-list-landing-page.component'

const routes: Routes = [
  {
    path: '',
    component: JobListLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobListRoutingModule { }
