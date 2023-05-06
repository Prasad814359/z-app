import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service'
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-landing-page',
  templateUrl: './dashboard-landing-page.component.html',
  styleUrls: ['./dashboard-landing-page.component.scss']
})
export class DashboardLandingPageComponent implements OnInit,OnDestroy {

  constructor(
    private _dashboardService : DashboardService,
    private _mainService : MainService,
    private router: Router
  ) { }
  
  statusData : any = {}
  statusList: any = []
  isLoaderActive : boolean = false
  totalJobCount : number = 0
  $onDestroy = new Subject<void>();
  

  getStatusCount() {
    return new Promise((resolve,reject) => {
      let res = this._dashboardService.getStatusJobCount()
      resolve(res['data'])
    })
  }

  async ngOnInit() {
    this.isLoaderActive = true
    this.statusData = await this.getStatusCount()
    // console.log(this.statusData)
    this.formatData()
    // console.log(this.statusList)
    this.isLoaderActive = false
  }

  formatData() {
    this.statusList = Object.keys(this.statusData)
    let total = 0
    this.statusList.forEach((e: string) => {
      total += this.statusData[e]
    });
    this.totalJobCount = total
  }

  navigateToJob(status: string) {
    this._mainService.setStatus(status)
    this.router.navigateByUrl("/job")
  }

  ngOnDestroy() {
    this.$onDestroy.next()
    this.$onDestroy.unsubscribe()
  }

}
