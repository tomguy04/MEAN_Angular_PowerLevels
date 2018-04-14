import { Component, OnInit } from '@angular/core';
import {Power} from './power'

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  power = new Power();

  // powerLevel :number = 1;
  // tasks: Power={
  // powerObj: Power={
  //   powerNumber : number
  // }
  onSubmit(){
    console.log(this.power);
    this.power = new Power();
  }
//   tasks: Power[] = [
//   {
//     _id: 1,
//     title: 'first task',
//     completed: false,
    
//   },
//   {
//     _id: 2,
//     title:'second task',
//     completed: false
//   }
// ];

// onSubmit(){
//   console.log(this.powerLevel);
//   this.powerLevel = 1;
// }

  constructor() { }
}

