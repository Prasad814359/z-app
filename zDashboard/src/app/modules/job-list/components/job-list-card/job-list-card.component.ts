import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-list-card',
  templateUrl: './job-list-card.component.html',
  styleUrls: ['./job-list-card.component.scss']
})
export class JobListCardComponent implements OnInit {

  constructor() { }

  @Input() colList : any = []
  @Input() jobList : any = []
  @Output() onCardClick = new EventEmitter<any>()

  ngOnInit(): void {

  }

  onCardClicked(jobId : string) {
    this.onCardClick.emit(jobId)
  }

}
