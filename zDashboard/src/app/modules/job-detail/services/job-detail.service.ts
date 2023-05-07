import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor(private _http: HttpClient) { }

  getJobDetail(jobId: number) {
    return this._http.post('https://z-app-rolv.onrender.com/api/zDashboard/jobDetail',{
      job_id: jobId
    })
  }

}
