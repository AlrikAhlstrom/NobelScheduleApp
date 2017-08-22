import { AuthProviders } from 'angularfire2';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./../schedule-creator/schedule-creator.component.css'
  ]
})
export class ScheduleComponent implements OnInit {

  id: any;
  schedule: any;
  schedules: any;
  currentSchedules: any;
  year: any;
  month: any;

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
    ) {
      let user = this.authService.getUser();
      user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
      user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
      user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
      this.displayName = user.displayName;
     }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.year = this.route.snapshot.params['year'];
    this.month = this.route.snapshot.params['month'];
    
    this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(schedule => {
      this.schedule = schedule;
    });
  }
}
