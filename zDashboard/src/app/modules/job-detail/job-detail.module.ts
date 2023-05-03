import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailRoutingModule } from './job-detail-routing.module';
import { JobDetailLandingPageComponent } from './pages/job-detail-landing-page/job-detail-landing-page.component';
import { AssignedToContainerComponent } from './components/assigned-to-container/assigned-to-container.component';
import { AssignedToCardComponent } from './components/assigned-to-card/assigned-to-card.component';
import { JobDetailContainerComponent } from './components/job-detail-container/job-detail-container.component';


@NgModule({
  declarations: [
    JobDetailLandingPageComponent,
    AssignedToContainerComponent,
    AssignedToCardComponent,
    JobDetailContainerComponent
  ],
  imports: [
    CommonModule,
    JobDetailRoutingModule
  ]
})
export class JobDetailModule { }
