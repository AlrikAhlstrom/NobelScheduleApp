import { ScheduleTemplatesService } from './../../services/schedule-templates.service';
import { ShiftTypeService } from './../../services/shift-type.service';
import { EmployeesService } from './../../services/employees.service';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-schedule-creator',
  templateUrl: './schedule-creator.component.html',
  styleUrls: ['./schedule-creator.component.css']
})
export class ScheduleCreatorComponent implements OnInit {


    title: string;
    schemaDate: Date;
    formattedDate: string;
    requiredShifts: string[];
    hour: number;
    column: Column;
    tableData: Column[];
    columnFromTable: Array<string>;
    missingShifts: Array<string>;
    openHours: number[];
    tableRows: number[];
    schedule: any;

    date: Date;
    time: number;
    weekendTable: Column[];
    tuesdayTable: Column[];
    wedToFriTable: Column[];
    juneTable: Column[];
    julyWeekdayTable: Column[];
    julyWeekendTable: Column[];
    tableTypes: any;
    id: any;
    year: any;
    month: any;
    createdAt: Date;
    employees: any;
    shiftsFromDb: any;

    templates: any;
    template: any;

    row: Row;
    rows: Row[];
    editedSchedule: Boolean;

    isAdmin: boolean;
    isGuide: boolean;
    isEmployee: boolean;
    displayName: string;

  constructor(
    private firebaseService: FirebaseService,
    private employeesService: EmployeesService,
    private shiftTypeService: ShiftTypeService,
    private scheduleTemplatesService: ScheduleTemplatesService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
    ) {
        let user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;

        this.tableData = [];
        
         this.schedule = {
            title: this.title,
            employees: [],
            tableData: this.wedToFriTable,
            responsible: '',
            info: '',
            createdAt: '',
            tableType: [],
            date: this.date,
            time: this.time,
        }; 
        
        if (this.title) {
            this.schedule.title = this.title
        }
        this.tableTypes = [this.weekendTable, this.tuesdayTable, this.wedToFriTable];
        this.columnFromTable = [];
        this.openHours = [];
        /*this.startTime = 9;
        this.endTime = 17;*/

   }


    ngOnInit() {
        
        // initial values for testing
       /* this.schedule.tableData = this.weekendTable;
        this.schedule.title = 'Söndag 26 Mar 2017';
        this.initiateTable();*/

       /* this.schedule.tableData = this.julyWeekdayTable;
        this.schedule.title = 'Saturday 3 Jul 2017';
        this.addEmployeeFromTableTypeSelection();
        this.initiateTable();*/


        //this.user = JSON.parse(localStorage.getItem('user'));
        if (this.route.snapshot.params['year']) {
            
            this.id = this.route.snapshot.params['id'];
            this.year = this.route.snapshot.params['year'];
            this.month = this.route.snapshot.params['month'];

            this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(schedule => {
             
                this.schedule = schedule;
                this.schedule.employees = schedule.employees;
                this.schedule.tableData = schedule.tableData;
                this.title = schedule.title;
                this.initiateTable();
                
                if( (typeof this.schedule.editedBy) === "undefined" ) {
                    this.editedSchedule = false;
                } else {

                    this.editedSchedule = true;
                }
            });
        } else {
            this.schedule.employees = [];
            this.editedSchedule = false;
        }

        this.employeesService.getEmployees().subscribe( employees => {
            this.employees = employees.sort((a,b) => {return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);} );
        });

        this.shiftTypeService.getShifts().subscribe( shiftTypes => {
            this.shiftsFromDb = shiftTypes.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
        })

        this.getTemplates();
      
    }

    saveSchedule() {
 
        let response = confirm('Vill du spara schemat?');

        let newDate = new Date();
        newDate.setHours(newDate.getHours()+2);
        this.schedule.createdAt = newDate.toUTCString();
        const date = new Date(this.schedule.time);


        if (response) {
            if (this.year) {
                this.schedule.editedBy = this.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
                this.firebaseService.saveSchedule(this.schedule);
                this.router.navigate(['/schedule/' + this.year + '/' + this.month + '/' + this.id ]);
            } else {
                this.firebaseService.saveSchedule(this.schedule);
                this.router.navigate(['/schedule/' + this.year + '/' + this.month + '/' + this.id ]);
            }
        }   
    }

    updateSchedule() {

        let response = confirm('Vill du spara schemat?');
    
        if (response) {
            let newDate = new Date();
        newDate.setHours(newDate.getHours()+2);
        this.schedule.createdAt = newDate.toUTCString();
        this.schedule.editedBy = this.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
        this.schedule = this.firebaseService.updateSchedule( this.schedule, this.year, this.month, this.id,).then( () => {
            this.router.navigate(['/schedule/' + this.year + '/' + this.month + '/' + this.id ]);
        })
        }
    }



    getTemplates() {

        this.scheduleTemplatesService.getTemplates().subscribe (templates => {
            this.templates = templates.sort((a,b) => {return (a.templateName > b.templateName) ? 1 : ((b.templateName > a.templateName) ? -1 : 0);} );
        })
    }

    selectTemplate(id) {

        this.ngOnInit();

        this.scheduleTemplatesService.getTemplate(id).subscribe(template => {
            this.template = template;
            this.schedule.tableData = template.tableData.columns;
            this.schedule.employees = template.tableData.rows.map( employee  => {

                let employeeToSchedule = '';
                if(typeof employee === 'string') {
                    employeeToSchedule = employee;
                }
                return {name: employeeToSchedule, hasLunch: false};
            });
        });
        this.initiateTable();
    
    }

    initiateTable() {

        if(!this.route.snapshot.params['year']) {

        this.schedule.tableData.forEach((column, index) =>  {
                this.schedule.tableData[index].missingShifts = this.schedule.tableData[index].requiredShifts.map((missingShift) => {
                    {return missingShift; } ;
                } );
            });
        
        } else {
            this.updateAllMissingShifts();
        }
        this.checkLunches();
    }

    initiateAssignedShiftTemplate() {
        
        this.template.tableData.rows.forEach(row => {
            this.schedule.employees.push({name: row, hasLunch: false});
            
        });
        this.checkLunches();
        
        this.schedule.tableData.forEach((column, i) => {
            column.requiredShifts = column.assignedShifts.map(requiredShift => {
                if(requiredShift.length > 0) {
                    return requiredShift;
                }
            } );
        });
    }

    formatDate(event) {

         let d = new Date(event);

        //TODO: put weekday and months in a service.

        const weekday = new Array(7);
        weekday[0] =  'Söndag';
        weekday[1] = 'Måndag';
        weekday[2] = 'Tisdag';
        weekday[3] = 'Onsdag';
        weekday[4] = 'Torsdag';
        weekday[5] = 'Fredag';
        weekday[6] = 'Lördag';

        const months = new Array(12);
        months[0] = 'Jan';
        months[1] = 'Feb';
        months[2] = 'Mar';
        months[3] = 'Apr';
        months[4] = 'Maj';
        months[5] = 'Jun';
        months[6] = 'Jul';
        months[7] = 'Aug';
        months[8] = 'Sep';
        months[9] = 'Okt';
        months[10] = 'Nov';
        months[11] = 'Dec';

        if(!this.year) {

        this.formattedDate = weekday[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
        this.schedule.title = this.formattedDate;
        this.schedule.time = d.getTime();
        this.schedule.date = d;
        } 

    }

    addRow(event: any) {

        const newEmp = {name: '', hasLunch: false};
        this.schedule.employees.push(newEmp);
    }

    addEmployeeFromTableTypeSelection() {
        
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: '', hasLunch: false});
        this.schedule.employees.push({name: 'Butiken', hasLunch: false});
    }

    addEmployee(event, row) {
        
        this.schedule.employees[row].name = event;

        this.schedule.tableData.forEach( (value) => {
            value.assignedShifts.push('');
            })
   
       this.checkLunches();
    }

    removeEmployee(row) {

        this.schedule.employees.splice(row, 1);

        this.schedule.tableData.forEach((aShifts, index) => {
                this.schedule.tableData[index].assignedShifts.splice(row, 1);
                this.updateMissingShifts(index, row);
            }
        );
    }

    checkLunches() {

        this.schedule.employees.forEach((row, rowIndex ) => {
            let tempLunch = false;
            this.schedule.tableData.forEach((hour, hourIndex) => {

                if (this.schedule.tableData[hourIndex].assignedShifts[rowIndex] === 'L') {
                        tempLunch = true;
                        this.schedule.employees[rowIndex].hasLunch = "ja";
                    } else {
                        if (!tempLunch) {
                            this.schedule.employees[rowIndex].hasLunch = "nej";
                        }
                    }
            } );
        });

    }

    updateAllMissingShifts(){

        this.schedule.tableData.forEach(column => {
            column.missingShifts = column.requiredShifts.map((requiredShift: string) => {return requiredShift})
            column.assignedShifts.forEach(shift => {
                column.missingShifts.forEach((missingShift, index) => {
                    if(shift === missingShift) {
                        column.missingShifts.splice(index, 1);
                    }
                });
            });
        });

    }

    updateMissingShifts(hour: number, row: number) {
        
        this.schedule.tableData[hour].missingShifts = this.schedule.tableData[hour].requiredShifts.map((requiredShift: string) => { return requiredShift; } );
        this.schedule.tableData[hour].assignedShifts.forEach((shift: string) => {
            this.schedule.tableData[hour].missingShifts.forEach((missingShift: string,  index: number) => {
                if (shift === missingShift) {
                    this.schedule.tableData[hour].missingShifts.splice(index, 1);
                }
            });
        });
        
    }
    getBool(text) {

    if(text === "ja") {
      return true;
    } else {
      return false
    }
  }

}

interface Column {
    hour: number;
    requiredShifts: string[];
    missingShifts: string[];
    assignedShifts: string[];
}

interface Employee {
    name: string;
    hasLunch: boolean;
}

interface Schedule {
    id?: any;
    title: string;
    employees: Employee[];
    tableData: Column[];
    responsible: string;
    info: string;
    createdAt: string;
    //remove tableType?
    tableType: any;
    //firebase cannot savt Date object - stringify it.
    date: Date;
    time: number;
    editedBy?: string;
}

interface Template {
    $key: string;
    templateName: string;
    tableData: TableData;
}

interface TableData {
  columns: Column[];
  rows: Row[];
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