import { EmployeesService } from './../../services/employees.service';
import { ScheduleTemplatesService } from './../../services/schedule-templates.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ShiftTypeService } from './../../services/shift-type.service';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-schedule-types',
  templateUrl: './schedule-types.component.html',
  styleUrls: ['../schedule-creator/schedule-creator.component.css']
})
export class ScheduleTypesComponent implements OnInit {

  hour: number;
 /* hours: hour[];*/
  column: Column;
  columns: Column[];
  row: Row;
  rows: Row[];
  openingHours: number[];
  closingHours: number[];
  startTime: number;
  endTime: number;
  openHours: any[];
  shiftsFromDb: any;

  tableData: TableData;
  template: any;
  templateRow: any;
  templateName: string;
  showRequiredShifts = true;
  templates: any[];

  employeeList: any;
  id: string;
  hasId: boolean;

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;

  constructor(
    private shiftTypeService: ShiftTypeService,
    private scheduleTemplateService: ScheduleTemplatesService,
    private employeesService: EmployeesService,
    private authService: AuthenticationService,
  ) {

      this.openingHours = [6, 7, 8, 9, 10, 11, 12];
      this.closingHours = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
      this.rows = [];
      this.columns = [];

      let user = this.authService.getUser();
      user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
      user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
      user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
      this.displayName = user.displayName;

      this.id = "";
   }

  ngOnInit() {
 
 

    this.shiftTypeService.getShifts().subscribe( shiftTypes => {
            this.shiftsFromDb = shiftTypes.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
        });
    
    this.scheduleTemplateService.getTemplates().subscribe( templates => {
      this.templates = templates.sort((a, b) => { return (a.templateName > b.templateName) ? 1 : ((b.templateName > a.templateName) ? -1 : 0); } );
    })

    this.employeesService.getEmployees().subscribe(employee => {
      this.employeeList = employee.sort((a, b) => { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); } );
      this.employeeList.unshift('');
    } )
   /*   this.startTime = 12;
    this.endTime = 14;
    this.getOpenHours();  */
  }

  selectStartTime(event: any) {
    this.startTime = event;
    this.endTime ? this.getOpenHours() : null;
  }

  selectEndTime(event: any) {
    this.endTime = event;
    this.startTime ? this.getOpenHours() : null;
  }

  getOpenHours(){
  
    this.columns = [];
    this.openHours = [];
    this.rows = [];
    const dayLength = this.endTime - this.startTime ;
    
    while (this.startTime < this.endTime) {
      this.openHours.push(this.startTime);
      this.startTime ++;
      }

    this.openHours.push(this.endTime);
     this.openHours.forEach( (h, index) => {
        const column = {hour: h, requiredShifts: [], missingShifts: [], assignedShifts: []};
        this.columns.push(column);
      }    
    );

    this.tableData = {columns: this.columns, rows: this.rows};
    this.template = {templateName: '', tableData: this.tableData }
    this.addRow();
  }
  addRow() {
    let newRow = {employee: ''};
    this.template.tableData.rows.push(newRow);

    let rowIndex = this.template.tableData.rows.length -1;
    this.template.tableData.columns.forEach(column => {
      column.assignedShifts[rowIndex] = '';
      column.requiredShifts[rowIndex] = '';
    });

  }

  deleteRow(r, index) {
    
     this.template.tableData.rows.splice(index, 1)

    this.template.tableData.columns.forEach((column, i) => {
      column.assignedShifts.splice(index, 1);
      column.requiredShifts.splice(index,1);
      
    }); 
  }
  
  addEmployee(event: any, index) {
    this.rows[index] = event;
  }

  saveTemplate() {
    if(!this.templateName) {
      alert('schemanamn saknas')
    } else {
      this.template.templateName = this.templateName;
      this.scheduleTemplateService.saveTemplate(this.template);
    }
  }

  deleteTemplate(id, name){
    let response = confirm('Är du säker på att du vill radera schemamallen ' + '"' + name + '"' + '?');

     response ? this.scheduleTemplateService.deleteTemplate(id) : null;
    this.ngOnInit(); 
  }
  toggleVisibleShiftTypes() {
    this.showRequiredShifts ? this.showRequiredShifts = false : this.showRequiredShifts = true;
  }

  updateTemplate(id) {

    this.scheduleTemplateService.updateTemplate(id, this.template);
  }

  viewTemplate(id) {

    this.id = id;
    this.hasId = true;

    this.columns = [];
    this.rows = [];
    this.template = null;

    this.scheduleTemplateService.getTemplate(id).subscribe( template => this.template  = template);
    this.templateName = this.template.templateName;

    if(this.template.tableData.columns[0].assignedShifts.indexOf('Ö') !== -1) {
      this.showRequiredShifts = false;
    } else {
      this.showRequiredShifts = true;
    }
  } 
    
}

interface Row {
  employee: string;
}

interface Column {
    hour: number;
    requiredShifts: string[];
    missingShifts: string[];
    assignedShifts: string[];
}


//add to template: rows, employeeName

interface TableData {
  columns: Column[];
  rows: Row[];
}

interface Template {
  $key: string;
  templateName: string;
  tableData: TableData;
}

