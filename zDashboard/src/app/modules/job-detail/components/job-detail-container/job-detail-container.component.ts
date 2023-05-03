import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-detail-container',
  templateUrl: './job-detail-container.component.html',
  styleUrls: ['./job-detail-container.component.scss']
})
export class JobDetailContainerComponent implements OnInit {

  constructor() { }

  @Input() jobDetail : any

  ngOnInit(): void {
  }

}
