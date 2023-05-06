import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getStatusJobCount() {
    return this._http.get('http://localhost:3001/api/zDashboard/retrieveDashboardCount')
    // return {
    //   err: false,
    //   data: { CONFIRMED: 2, ON_MY_WAY: 1, STARTED: 2, COMPLETED: 1, ON_HOLD: 1 }
    // }
  }

}
