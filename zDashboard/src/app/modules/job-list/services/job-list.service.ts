import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private _http: HttpClient) { }

  getJobList(jobStatus: string) {
    return this._http.post('https://z-app-rolv.onrender.com/api/zDashboard/retrieveJobList',{
      job_status: jobStatus
    })
  }

  jobStatusList() {
    return this._http.get('https://z-app-rolv.onrender.com/api/zDashboard/jobStatusList')
  }
}
