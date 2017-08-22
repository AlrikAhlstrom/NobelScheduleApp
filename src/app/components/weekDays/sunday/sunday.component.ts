import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class SundayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'sunday';
   }
  
}
