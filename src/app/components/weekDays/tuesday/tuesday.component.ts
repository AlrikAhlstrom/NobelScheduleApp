import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuesday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class TuesdayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'tuesday';
   }
  
}
