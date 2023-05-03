import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assigned-to-card',
  templateUrl: './assigned-to-card.component.html',
  styleUrls: ['./assigned-to-card.component.scss']
})
export class AssignedToCardComponent implements OnInit {

  constructor() { }

  @Input() assignTo: string = ''

  ngOnInit(): void {
  }

}
