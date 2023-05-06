import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private _http: HttpClient) { }

  getJobList(jobStatus: string) {
    return this._http.post('http://localhost:3001/api/zDashboard/retrieveJobList',{
      job_status: jobStatus
    })
  }

  jobStatusList() {
    return this._http.get('http://localhost:3001/api/zDashboard/jobStatusList')
  }
}
