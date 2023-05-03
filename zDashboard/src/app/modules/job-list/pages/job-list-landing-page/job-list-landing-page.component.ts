import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobListService } from '../../services/job-list.service';
import { MainService } from 'src/app/services/main.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-landing-page',
  templateUrl: './job-list-landing-page.component.html',
  styleUrls: ['./job-list-landing-page.component.scss']
})
export class JobListLandingPageComponent implements OnInit,OnDestroy {

  constructor(
    private _jobListService : JobListService,
    private _mainService: MainService,
    private router: Router
  ) { }

    isLoaderActive : boolean = false
    $onDestroy = new Subject<void>();
    selectedFilter : any;
    jobList: any = []

    getJobList(status: string) {
      return new Promise((resolve,reject) => {
        let res = this._jobListService.getJobList(status)
        resolve(res)
      })
    }

  async ngOnInit() {
    this.isLoaderActive = true
    this.resolveObservers()
    this.jobList = await this.getJobList(this.selectedFilter)
    console.log(this.jobList)
    this.isLoaderActive = false
  }

  resolveObservers() {
    this._mainService.getStatus()
    .subscribe((res: any) => {
      if(res) this.selectedFilter = res
    },(err) => {
      console.log(err)
    })
  }

  navigateToJobDetail(jobId: number) {
      this.router.navigateByUrl(`/job/${jobId}`)
  }

  ngOnDestroy(): void {

  }
}
