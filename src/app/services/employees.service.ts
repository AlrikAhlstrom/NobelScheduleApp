import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from "rxjs";
import * as Rx from "rxjs/Rx";
import "rxjs/add/operator/take";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/first";

@Injectable()
export class EmployeesService {
  employees: FirebaseListObservable<any[]>;
  employee: FirebaseObjectObservable<any>;
  selectedEmployee: any;
  constructor(private af: AngularFire) {
    this.employees = this.af.database.list('/employees/') as FirebaseListObservable<Employee[]>;
   }

  saveEmployee(newEmployee) {
      this.employees.push(newEmployee);
  }

  getEmployees() {

    return this.employees;
  }

  getEmployee(id) {

    return this.af.database.object('/employees/' + id) as FirebaseObjectObservable<Employee>;
    
  }

  getEmployeeByEmail(email){

    let user = {};
     this.employees.subscribe( employees => {
       employees.forEach( employee => {

         if(employee.email === email) {

           user = employee;
         }
       })
     })
      return user;
  }

  updateEmployee(id, employee) {
    //this.employees = this.af.database.list('/employees/') as FirebaseListObservable<Employee[]>;
    return this.employees.update(id, employee);
  }

  deleteEmployee(id) {
  this.employee = this.af.database.object('/employees/' + id) as FirebaseObjectObservable<Employee>;

  this.employee.subscribe(selectedEmployee => {
    this.selectedEmployee = selectedEmployee;
  })
  let response = confirm('Är du säker på att du vill radera ' + 
    this.selectedEmployee.firstName + ' ' + 
    this.selectedEmployee.lastName + '?')

  response? this.employee.remove() : null;

  }

}

interface Employee {
  $key?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emails?: string[];
  title?: string;
  tourReady?: boolean;
  admin?: boolean;
}