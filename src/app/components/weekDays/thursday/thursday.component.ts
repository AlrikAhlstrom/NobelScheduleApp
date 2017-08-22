import { Component } from '@angular/core';

@Component({
  selector: 'app-thursday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class ThursdayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'thursday';
   }
  
}
