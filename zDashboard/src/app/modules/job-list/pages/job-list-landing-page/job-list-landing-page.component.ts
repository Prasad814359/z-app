import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobListService } from '../../services/job-list.service';
import { MainService } from 'src/app/services/main.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';


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

  colList: any = [
    {
      colName: 'Job Id',
      key_name: 'job_id',
      width: 6,
      type: 'text',
      isActive: true,
    },
    {
      colName: 'Job Name',
      key_name: 'name',
      width: 10,
      type: 'text',
      isActive: true,
    },
    {
      colName: 'Customer',
      key_name: 'customer',
      width: 8,
      type: 'text',
      isActive: true,
    },
    {
      colName: 'Status',
      key_name: 'status',
      width: 8,
      type: 'text',
      isActive: true,
    },
    {
      colName: 'Area',
      key_name: 'area',
      width: 8,
      type: 'text',
      isActive: true,
    },
    {
      colName: 'Assigned To',
      key_name: 'assigned_to',
      width: 10,
      type: 'list',
      isActive: true,
    }
  ];


    isLoaderActive : boolean = false
    $onDestroy = new Subject<void>();
    selectedFilter : any;
    jobList: any = []
    jobStatusList: any = []

    getJobList(status: string) {
      return new Promise((resolve,reject) => {
        this._jobListService.getJobList(status)
        .pipe(takeUntil(this.$onDestroy))
        .subscribe((res: any) => {
          if(!res['err'])
            resolve(res['data'])
        },(err) => {
          console.log(err)
        })
      })
    }

    getJobStatusList() {
      return new Promise((resolve,reject) => {
        this._jobListService.jobStatusList()
        .pipe(takeUntil(this.$onDestroy))
        .subscribe((res: any) => {
          if(!res['err'])
            resolve(res['data'])
        },(err) => {
          console.log(err)
        })
      })
    }

  async ngOnInit() {
    this.isLoaderActive = true
    this.resolveObservers()
    this.jobList = await this.getJobList(this.selectedFilter)
    this.jobStatusList = await this.getJobStatusList()
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
    console.log(jobId)
      this.router.navigateByUrl(`/job/${jobId}`)
  }

  async filterApplied(status:string) {
    this.jobList = await this.getJobList(status)
  }

  ngOnDestroy(): void {
    this.$onDestroy.next()
    this.$onDestroy.unsubscribe()
  }
}
