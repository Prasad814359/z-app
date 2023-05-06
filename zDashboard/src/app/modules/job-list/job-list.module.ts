import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListRoutingModule } from './job-list-routing.module';
import { JobListLandingPageComponent } from './pages/job-list-landing-page/job-list-landing-page.component';
import { JobListCardComponent } from './components/job-list-card/job-list-card.component';


@NgModule({
  declarations: [
    JobListLandingPageComponent,
    JobListCardComponent
  ],
  imports: [
    CommonModule,
    JobListRoutingModule
  ]
})
export class JobListModule { }
