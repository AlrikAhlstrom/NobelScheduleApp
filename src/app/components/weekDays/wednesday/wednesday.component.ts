import { Component } from '@angular/core';

@Component({
  selector: 'app-wednesday',
  templateUrl: './wednesday.component.html',
  styleUrls: ['./wednesday.component.css']
})
export class WednesdayComponent {

  weekday: string;
  
  constructor(
        ) {
    this.weekday = 'wednesday';
   }

}