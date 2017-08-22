import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {



  id: string;
  firstName: string;
  lastName: string;
  title: string;
  tourReady: boolean;
  admin: boolean;

  emails: string[];
  emailsCopy: string[];
  employees: any;

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;

  newElementForm: FormGroup;

  emailFormGroup: FormGroup;
  emailChildGroup: any;
  emailGrandChildGroup: any;

  constructor(
    private employeesService: EmployeesService,
    private authService: AuthenticationService,
    private fb: FormBuilder

    ) {
      let user = this.authService.getUser();
      user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
      user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
      user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
      this.displayName = user.displayName;
      this.emails = [];
      this.emailsCopy = [];
      this.id = '';

     }

  ngOnInit() {

    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees.sort((a,b) => {return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);} );
      }
    );

    this.initEmailFormGroup();

  }


  addMultiValueControl(){
    
    this.emailGrandChildGroup.push(this.fb.group({email: ['']}));
  }

  saveEmployee() {

    this.emailsCopy = [];
    
    this.emailGrandChildGroup.value.forEach(emailForm => {
      this.emailsCopy.push(emailForm.email);
    })

    let employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      title: this.title,
      tourReady: this.tourReady,
      admin: this.admin,
      emails: this.emailsCopy
      }

    let duplicateEmails = [];

    let _employees = this.employeesService.getEmployees();
    _employees.subscribe( employees => {
      employees.forEach(employee => {        
        employee.emails.forEach((email, i) => {
          this.emailsCopy.forEach(formEmail => {
            if(this.id.length > 1) {
              if (formEmail === email && employee.$key !== this.id) {
                duplicateEmails.push(formEmail + ' används redan av ' + employee.firstName + ' ' + employee.lastName + '.');
              }
            } else {
              if(formEmail === email) {
                duplicateEmails.push(formEmail + ' används redan av ' + employee.firstName + ' ' + employee.lastName + '.');
              } 
            }

          });
        });
      });
    });

    if(duplicateEmails.length === 0) {
      if(this.id.length > 1) {
        this.employeesService.updateEmployee(this.id, employee);
      } else {
        this.employeesService.saveEmployee(employee);
      }
    } else {
      duplicateEmails.forEach(message => {
        alert(message);
      });
    }
    
  }

  deleteEmployee(id) {
    this.employeesService.deleteEmployee(id);
    this.clearEmployee();
  }


  clearEmployee() {
    
    this.firstName = '';
    this.lastName = '';
    this.title = '';
    this.tourReady = null;
    this.admin = null;
    this.emails = [];
    this.id = '';
    this.emailsCopy = [];

    this.initEmailFormGroup();
  }
  
  clearEmails(){
  
    this.emailGrandChildGroup.value.forEach((element, index) => {
      if(index === 1) {
        this.emailsCopy.splice(1, 1);
      }
      
    });
    this.initEmailFormGroup();

  this.emailsCopy.forEach(email => {
      this.emailGrandChildGroup.push(this.fb.group({email: [email]}))
    });

  }

  deleteEmail(event){

    this.emailsCopy = [];

    this.emailGrandChildGroup.value.forEach((group, index) => {
      if(index !== event) {
        this.emailsCopy.push(group.email);
      }
    }) 

    this.initEmailFormGroup();
 
    this.emailsCopy.forEach(email => {
        this.emailGrandChildGroup.push(this.fb.group({email: [email]}))
      });  
  }

  initEmailFormGroup() {

    this.emailGrandChildGroup = this.fb.array([]);
    this.emailChildGroup = this.fb.group({emails: this.emailGrandChildGroup});
    this.emailFormGroup = this.fb.group({multiEmailForm: this.emailChildGroup});

    if(this.id.length < 1) {
      this.emailGrandChildGroup.push(this.fb.group({email: ['']}))
    }

  }



  editEmployee(firstName, lastName, title, tourReady, admin, emails, id) {

    this.firstName = firstName;
      this.lastName = lastName;
       this.title = title;
      this.tourReady = tourReady;
     this.admin = admin;


       this.id = id;
       this.emails = emails;
       this.emailsCopy = this.emails.slice();
       this.initEmailFormGroup();

      emails.forEach(email => {
         this.emailGrandChildGroup.push(this.fb.group({email: [email]}))
       });
       
       
  }

  selectType(title) {
    this.title = title;
  }

  selectTourReady(bool) {
    this.tourReady = bool;
  }

  selectAdmin(bool) {
    this.admin = bool;
  }

  getBool(text) {
    if(text === "true") {
      return "ja";
    } else {
      return "nej";
    }
  }

}

interface Employee {
  firstName?: string;
  lastName?: string;
  title?: string;
  tourReady?: boolean;
  admin?: boolean;
}

@Component({
  selector: 'emailForm',
  templateUrl: './emailForm.html',
  styleUrls: ['./employees.component.css']
})

export class EmailForm {

  @Output() 
  change: EventEmitter<number> = new EventEmitter<number>();

  @Input('group')

  multiEmailForm: FormGroup;
  
  public deleteEmailForm(index) {
    this.change.emit(index);
  }
}