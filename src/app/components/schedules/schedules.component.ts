import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseService } from './../../services/firebase.service';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules: any;
  originalSchedules: any;
  editedSchedules: any;
  testName: string;
  title: string;
  schedule: any;
  originalSchedule: any;
  oSchedules: any;
  eschedules:any[];
  testSchedules: any[];
  day: number;
  days: string[];
  lastEdited: any[];
  olastEdited: any[];
  date: any;
  year: any;
  month: any;

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthenticationService
      ) { 
        let user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
      }

  ngOnInit() {

    this.date = new Date;
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth() + 1;

    this.getSchedules(this.year, this.month);
    this.getOriginalSchedules(this.year, this.month);

  }

  deleteSchedule(id) {
    let response = confirm('Är du säker på att du vill radera schemat?');

    response ? this.firebaseService.deleteSchedule(id, this.year, this.month) : null;
    
  }

  showPreviousMonth(){

    if (this.month == 1) {
      this.year --;
      this.month = 12;
      this.getSchedules(this.year, this.month);

    } else {

    this.month --;
    this.getSchedules(this.year, this.month);
    }
  }

  showNextMonth(){

    if (this.month == 12) {
      this.year ++;
      this.month = 1;
      this.getSchedules(this.year, this.month);
    }

    this.month ++;
    this.getSchedules(this.year, this.month);
  }

  getSchedules(year, month){
    this.firebaseService.getDatedSchedules(year, month).subscribe(schedules => {
          this.eschedules = [];
          this.testSchedules = [];
          let tempTitle = '';

          this.schedules = schedules.sort( (a, b) => a.time - b.time );

          this.schedules.forEach(schedule => {
            
            if(tempTitle === '') {
              tempTitle = schedule.title;
              this.eschedules.push([schedule]);
            } else {
              if(schedule.title === tempTitle) {
                this.eschedules[this.eschedules.length - 1].push(schedule);
              } else {
                tempTitle = schedule.title;
                this.eschedules.push([schedule]);
              }
            }


          });
          


          this.eschedules.forEach(sameDateArray => {
            sameDateArray = sameDateArray.sort( (a, b) => 
            {
              var x = (new Date(a.createdAt).getTime());
              var y = (new Date(b.createdAt).getTime());

           return x - y;
           
            }); 
          });

this.editedSchedules = [];

          this.eschedules.forEach(eArray => {
             
            this.editedSchedules.push(eArray[eArray.length - 1]);
            this.testSchedules.push(eArray[0]);
          });
          //this.lastEdited = this.editedSchedules.map( date => {
            this.lastEdited = this.editedSchedules.map( date => {
            return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));

            
            
          });
          this.olastEdited = this.testSchedules.map( date => {
            return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));

            
            
          });
    });
        
        /*this.firebaseService.getEditedSchedules(year, month).subscribe(schedules => {
          this.editedSchedules = schedules.sort( (a, b) => a.time - b.time );
          this.lastEdited = this.editedSchedules.map( date => {
            return (' nytt ' + date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
          });

        });*/
  }

  getOriginalSchedules(year, month) {
    this.firebaseService.getDatedSchedules(year, month).subscribe(schedules => {
          this.originalSchedules = schedules.sort( (a, b) => a.time - b.time );

          this.oSchedules = [];

          let title = '';
          let date = new Date();

          this.originalSchedules.forEach(schedule => {
              //jämför alla scheman med samma title, använd .createdAt för att bara ta de äldsta med samma title
            if (title === '') {
              title = schedule.title;
              this.oSchedules.push(schedule);
              this.date = schedule.date;

            } else {
              if(title === schedule.title) {

                
                let currentScheduleDate = schedule.date;


                
                if(currentScheduleDate < date) {

                  date = schedule.date
                  if(this.oSchedules[this.oSchedules.lenght - 1].title !== schedule.title) {

                    
                    this.oSchedules.pop();
                    this.oSchedules.push(schedule);
                  }
                  
                }
              } else {
                title = schedule.title;
              this.oSchedules.push(schedule);
              this.date = schedule.date;
              }
            }
            
            
          });

          /* this.olastEdited = this.oSchedules.map( date => {
            return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
          }); */
          
 
          
          
        });

  }
    
  

}
