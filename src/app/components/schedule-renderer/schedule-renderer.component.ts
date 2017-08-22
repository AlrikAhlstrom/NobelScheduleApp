import { ShiftTypeService } from './../../services/shift-type.service';
import { CurrentScheduleService } from './../../services/current-schedule.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './schedule-renderer.component.html',
  styleUrls: ['./schedule-renderer.component.css']
})
export class ScheduleRendererComponent implements OnInit {


  @Input() weekday:string;
  

  schedule: any;
  schedules:any;
  //weekday: string;
  searchDate: any;
  
  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;
  initDisplayName
  responsible: boolean;

  firstName: string;

  currentHour: number;
  todaysDate: Date;
  isCurrentDay: boolean;
  shifts: any;
  legendShifts: any;
  showShifts: boolean;

  constructor(
    private currentScheduleService: CurrentScheduleService,
    private authService: AuthenticationService,
    private shiftTypeService: ShiftTypeService
        ) {
    //this.weekday = 'wednesday';

    let user = this.authService.getUser();
    user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
    user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
    user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
    this.firstName = user.firstName;
    this.isCurrentDay = false;
    this.showShifts = false;

    this.shiftTypeService.getShifts().subscribe((shifts) => {
      this.shifts = shifts.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} )
      this.legendShifts = this.shifts.slice(1);
    });
   }

  ngDoCheck(){

    let user = this.authService.getUser();
    user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
    user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
    user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
    this.firstName = user.firstName;
    this.displayName = user.displayName;
    
   if(this.displayName !== this.initDisplayName ) {
      this.initDisplayName = this.displayName;
      this.ngOnInit();
    }

  }

  toggleShifts() {
    this.showShifts = !this.showShifts;
 
  }

  ngOnInit() {

    if(this.isEmployee) {

    this.todaysDate = new Date();
    this.currentHour = this.todaysDate.getHours();

    if(this.currentScheduleService.getDayname(this.todaysDate.getDay()) === this.weekday) {
      this.isCurrentDay = true;
    }
    
    this.searchDate = this.currentScheduleService.getTodaysDate(this.weekday);
     let year = this.searchDate.year;
     let month = this.searchDate.month

     this.currentScheduleService.getScheduleByWeekday(year, month).subscribe(schedules => {
       this.schedules = schedules;
        schedules.map((schedule) => {
        if ((new Date( schedule.time)).getDate() == this.searchDate.date) {
            this.schedule = schedule;
            this.schedule.responsible.length > 2 ? this.responsible = true : this.responsible = false;
          }
        })
     });
    }
  }

   currentIndex(hour) {
     
    if(this.isCurrentDay) {
      if(this.schedule.tableData[hour].hour === this.currentHour) {
      return true;
    } else {
      return false;
    } 
    }
  }

  currentEmployee(name) {

    if(name === this.firstName) {
      return true;
    } else {
      return false;
    }
  }

  currentColor(h) {
    if(h === this.currentHour) {
      return true;
    }
    else {
      return false;
    }
  }

  getEmployee()
  {
    let isEmployee = false;
    let employee = this.authService.getUser().isEmployee;
    employee === "true" ? isEmployee = true : isEmployee = false;
    return isEmployee;
  }

}
