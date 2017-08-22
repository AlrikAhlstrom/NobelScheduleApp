import { CurrentScheduleService } from './../../services/current-schedule.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: '../weekDays/wednesday/wednesday.component.html',
  styleUrls: ['../weekDays/wednesday/wednesday.component.css']
})
export class HomeComponent {

  weekday: string;

  constructor(
    private currentScheduleService: CurrentScheduleService,
    public af: AngularFire
      ) {
    let today = new Date;
    this.weekday = this.currentScheduleService.getDayname(today.getDay());
   }

}