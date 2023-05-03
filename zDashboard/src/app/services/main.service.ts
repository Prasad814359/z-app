import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  $selectedStatus = new BehaviorSubject(null)

  setStatus(data: any) {
    this.$selectedStatus.next(data)
  }

  getStatus() {
    return this.$selectedStatus.asObservable()
  }

}
