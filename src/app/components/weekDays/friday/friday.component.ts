import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class FridayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'friday';
   }
  
}
