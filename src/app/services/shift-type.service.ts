import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as firebase from 'firebase';

@Injectable()
export class ShiftTypeService {
  shifts: FirebaseListObservable<any[]>;
  shift: FirebaseObjectObservable<any>;
  folder: any;
  constructor(
    private af: AngularFire, 
    public flashMessage: FlashMessagesService
  ) { }

  addShift(newShift) {

    this.shifts = this.af.database.list('/shifts/') as FirebaseListObservable<Shift[]>;
    this.shifts.push(newShift)
  }

  getShifts() {
    this.shifts = this.af.database.list('/shifts/') as FirebaseListObservable<Shift[]>;
    return this.shifts;
  }

  updateShift(id, shift) {
    this.shifts = this.af.database.list('/shifts/') as FirebaseListObservable<Shift[]>;
    return this.shifts.update(id, shift);
  }

  getShift(id) {
    this.shift = this.af.database.object('/shifts/' + id) as FirebaseObjectObservable<Shift>;
    return this.shift;
  }
  
  deleteShift(id) {
    let response = confirm('Är du säker på att du vill radera skiftet?');

    if (response) {
      this.shift = this.af.database.object('/shifts/' + id) as FirebaseObjectObservable<Shift>;
      this.shift.remove();
    }
  }

}

interface Shift {
  $key?: string;
  name?: string;
  description?: string;
  requiresTourReady?: boolean;
}