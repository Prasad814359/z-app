import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  constructor() { }

  getJobDetail(jobId: number) {
    console.log('jobId',jobId)

    let data = [
      {
        job_id : 1,
        status : "CONFIRMED",
        assigned_to : ["raghav", "vijay","raghav", "vijay","raghav", "vijay","raghav", "vijay","raghav", "vijay","raghav", "vijay","raghav", "vijay"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 2,
        status : "ON_MY_WAY",
        assigned_to : ["vijay"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 3,
        status : "CONFIRMED",
        assigned_to : ["ranjith"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 4,
        status : "STARTED",
        assigned_to : ["raghav"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 5,
        status : "STARTED",
        assigned_to : ["ranjith"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 6,
        status : "COMPLETED",
        assigned_to : ["vijay"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      },
      {
        job_id : 7,
        status : "ON_HOLD",
        assigned_to : ["vijay"],
        name: "TV Installation",
        customer: "Sanjay",
        area: "Thoraipakkam"
      }
    ]

    return data.find((l) => { return l['job_id'] == jobId})
  }

}
