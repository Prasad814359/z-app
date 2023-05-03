import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./modules/job-list/job-list.module').then((m) => m.JobListModule)
  },
  {
    path: 'job/:jobId',
    loadChildren: () => import('./modules/job-detail/job-detail.module').then((m) => m.JobDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
