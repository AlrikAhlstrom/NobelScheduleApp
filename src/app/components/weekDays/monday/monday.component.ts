import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monday',
  templateUrl: './../wednesday/wednesday.component.html',
  styleUrls: ['./../wednesday/wednesday.component.css']
})
export class MondayComponent {

  weekday: string;

  constructor(
        ) {
    this.weekday = 'monday';
   }
  
}
