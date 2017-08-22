import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saturday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class SaturdayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'saturday';
   }
  
}
