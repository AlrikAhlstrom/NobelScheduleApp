import { ShiftTypeService } from './../../services/shift-type.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

ShiftTypeService
@Component({
  selector: 'app-shift-types',
  templateUrl: './shift-types.component.html'
})
export class ShiftTypesComponent implements OnInit {

 
  id: any;
  name: string;
  description: string;
  requiresTourReady: boolean;
  shifts: any;

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;

  constructor(
    private shiftTypeService: ShiftTypeService,
    private authService: AuthenticationService
    ) {
    let user = this.authService.getUser();
    user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
    user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
    user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
    this.displayName = user.displayName;
    this.id = '';
     }

  ngOnInit() {

    this.shiftTypeService.getShifts().subscribe((shifts) => {
      this.shifts = shifts.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} )
    });
  }

  getShifts() {
    this.shiftTypeService.getShifts().subscribe((shifts) => {
      this.shifts = shifts.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} )
    });
  }

  addShift() {

    
    let shift = {
      name: this.name,
      description: this.description,
      requiresTourReady: this.requiresTourReady
    }

    if(this.id !== '') {

      this.shiftTypeService.updateShift(this.id, shift)
    } else {
      
      this.shiftTypeService.addShift(shift);
    }
    
    
  }

  deleteShift(id) {
    this.shiftTypeService.deleteShift(id);
    this.clearShift();
  }

  clearShift() {
    this.id = '';
    this.name = null;
    this.requiresTourReady = null;
    this.description = null;
  }

  editShift(name, description, requiresTourReady, id) {
    this.name = name,
    this.description = description,
    this.requiresTourReady = requiresTourReady,
    this.id = id
  }



  selectRequiresTourReady(bool) {
    this.requiresTourReady = bool;
  }

  getBool(text) {
    if(text === "true") {
      return "ja";
    } else {
      return "nej";
    }
  }

}

interface Shift {
  name?: string;
  description?: string,
  requiresTourReady: boolean;
}
