import { Component, OnInit, Input } from '@angular/core';
import {Power} from '../power';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
  // @Input() myTasks: Power[];
  @Input() powers: Power[];

  constructor() { }

  // ngOnInit() {
  // }

}
