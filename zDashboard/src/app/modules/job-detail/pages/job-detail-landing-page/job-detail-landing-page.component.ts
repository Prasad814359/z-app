import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JobDetailService } from '../../services/job-detail.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-job-detail-landing-page',
  templateUrl: './job-detail-landing-page.component.html',
  styleUrls: ['./job-detail-landing-page.component.scss']
})
export class JobDetailLandingPageComponent implements OnInit,OnDestroy {

  constructor(
    private _jobDetailService : JobDetailService,
    private _route: ActivatedRoute,
  ) { }

  jobId: any
  jobDetail: any
  isLoaderActive : boolean = false
  $onDestroy = new Subject<void>();

  getJobDetail(jobId: number) {
    return new Promise((resolve,reject) => {
      let res = this._jobDetailService.getJobDetail(jobId)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((res: any) => {
        if(!res['err'])
          resolve(res['data'])
      },(err) => {
        reject(err)
      })
    })
  }

  async ngOnInit() {
    this.isLoaderActive = true
    this.jobId = await this.resolveRouteParams()
    this.jobDetail = await this.getJobDetail(this.jobId)
    console.log(this.jobDetail)
    this.isLoaderActive = false
  }

  resolveRouteParams() {
    return new Promise((resolve,reject) => {
      this._route.params.subscribe((res) => {
        // console.log(res)
        if(res) {
          resolve(res['jobId'])
        }
        else {
          reject(null)
        }
      },(err) => {
        console.log(err)
        reject(err)
      })
    })

  }

  ngOnDestroy() {
    this.$onDestroy.next()
    this.$onDestroy.unsubscribe()
  }
}
