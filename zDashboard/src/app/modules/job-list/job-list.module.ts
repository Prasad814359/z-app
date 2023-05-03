import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListRoutingModule } from './job-list-routing.module';
import { JobListLandingPageComponent } from './pages/job-list-landing-page/job-list-landing-page.component';


@NgModule({
  declarations: [
    JobListLandingPageComponent
  ],
  imports: [
    CommonModule,
    JobListRoutingModule
  ]
})
export class JobListModule { }
