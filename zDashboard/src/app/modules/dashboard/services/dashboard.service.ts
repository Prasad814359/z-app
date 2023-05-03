import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getStatusJobCount() {
    return {
      err: false,
      data: { CONFIRMED: 2, ON_MY_WAY: 1, STARTED: 2, COMPLETED: 1, ON_HOLD: 1 }
    }
  }

}
