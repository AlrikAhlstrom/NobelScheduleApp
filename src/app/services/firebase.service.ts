import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  schedules: FirebaseListObservable<any[]>;
  originalSchedules: FirebaseListObservable<any[]>;
  schedule: FirebaseObjectObservable<any>;
  scheduleWithDate: FirebaseObjectObservable<any>;
  tempSchedules: any;


  constructor(private af: AngularFire) {}

  getDatedSchedules(year, month) {
    this.schedules = this.af.database.list('schedulesSorted/' + year + '/' + month) as FirebaseListObservable<Schedule[]>;
    return this.schedules;
  }

  getEditedSchedules(year, month) {
    this.schedules = this.af.database.list('schedulesSorted/' + year + '/' + month) as FirebaseListObservable<Schedule[]>;
    return this.schedules;
  }

  getScheduleDetails(id, year, month) {
    this.schedule = this.af.database.object('/schedulesSorted/' + year +'/' + month + '/' + id) as FirebaseObjectObservable<Schedule>;
    return this.schedule;
  }

  deleteSchedule(id, year, month) {
    this.schedule = this.af.database.object('/schedulesSorted/' + year +'/' + month + '/' + id) as FirebaseObjectObservable<Schedule>;
    this.schedule.remove();
  }

  saveSchedule(scheduleToSave) {
    /* const year = scheduleToSave.date.getFullYear();
    const month = scheduleToSave.date.getMonth() + 1; */


    
    const date = new Date(scheduleToSave.time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    
    

    this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month) as FirebaseListObservable<ScheduleWithDate[]>;
    this.schedules.push(scheduleToSave); 



  }

  updateSchedule(scheduleToUpdate, year, month, id) {


    if (scheduleToUpdate.editedBy === null) {
 
      this.saveSchedule(scheduleToUpdate);
     
    } else if (scheduleToUpdate.editedBy.length > 2) {

      this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month) as FirebaseListObservable<ScheduleWithDate[]>;
       return this.schedules.update(id, scheduleToUpdate);
      
    } 
    
   
    
    //this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month) as FirebaseListObservable<ScheduleWithDate[]>;

    //this.schedule = this.af.database.object('/schedulesSorted/' + year +'/' + month + '/' + id) as FirebaseObjectObservable<Schedule>;
    //let ref = firebase.app().database().ref();
    //let schedulesRef = ref.child('schedulesSorted' + '/' + year + '/' + month + '/' + id);
    //let schedulesRef = ref.child('schedulesSorted'  + '/' + year);

   // return this.schedules.update(schedulesRef, scheduleToUpdate);
    //  return this.schedules.update(id, scheduleToUpdate);
    //return  scheduleToUpdate;
 


  }

  /* saveEditedSchedule(scheduleToSave) {
    const date = new Date(scheduleToSave.time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    

    this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month + '/new') as FirebaseListObservable<ScheduleWithDate[]>;
    this.schedules.push(scheduleToSave);
  } */

}

interface Schedule {
  $key?: string;
  title?: string;
  employees?: string;
  tableData?: string;
  responsible?: string;
  info?: string;
  createdAt: any;
  tableType: any;
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