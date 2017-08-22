import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class CurrentScheduleService {

  schedules: FirebaseListObservable<any[]>;
  schedule: FirebaseObjectObservable<any>;
  todaysDate: any;
  searchDate: any;

  constructor(private af: AngularFire) { }

  getDayname(dayNumber) {
    const days = new Array(7);
    days[0] =  'sunday';
    days[1] = 'monday';
    days[2] = 'tuesday';
    days[3] = 'wednesday';
    days[4] = 'thursday';
    days[5] = 'friday';
    days[6] = 'saturday';

    return days[dayNumber];
  }

   getTodaysDate(weekDay) {
    //TODO: try out moment.js for date logic
    
    let date = new Date();
    let todaysDay = this.getDayname(date.getDay());
        
    while (weekDay !== todaysDay) {
        date.setDate(date.getDate() + 1);
        //todaysDay = days[date.getDay()]
        todaysDay = this.getDayname(date.getDay());
    }

    let month = date.getMonth() + 1;
    let wantedDate = date.getDate();
    let year = date.getFullYear();

    let searchDate = {year: year, date: wantedDate, month: month, dayName: todaysDay, }

    return(searchDate);
  }

  getScheduleByWeekday(year, month){

     this.schedules = this.af.database.list('/schedulesSorted/' + 
        year + '/' + 
        month + '/' ) as FirebaseListObservable<ScheduleWithDate[]>;

    return this.schedules;
  }

}

interface ScheduleWithDate {
  $key?: string;
  title?: string;
  employees?: string;
  tableData?: string;
  responsible?: string;
  info?: string;
  createdAt: any;
  tableType: any;
  date: any;
}