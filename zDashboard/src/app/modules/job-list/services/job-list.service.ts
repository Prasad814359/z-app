import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor() { }

  getJobList(status: string) {
    let data = [
      {
        job_id : 1,
        status : "CONFIRMED",
        assigned_to : ["raghav", "vijay"],
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

    if(status)
      data = data.filter((l) => { return l.status == status})

    return data
  }
}
