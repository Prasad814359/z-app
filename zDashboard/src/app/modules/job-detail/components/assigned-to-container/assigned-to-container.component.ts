import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assigned-to-container',
  templateUrl: './assigned-to-container.component.html',
  styleUrls: ['./assigned-to-container.component.scss']
})
export class AssignedToContainerComponent implements OnInit {

  constructor() { }

  @Input() jobDetail : any

  ngOnInit(): void {
  }

}
