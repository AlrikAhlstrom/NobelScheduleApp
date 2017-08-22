import { Component, OnInit } from '@angular/core';
import { ShiftTypeService } from './../../services/shift-type.service';
import { EmployeesService } from './../../services/employees.service';
import { FirebaseService } from './../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-schedule-editor',
  templateUrl: './schedule-editor.component.html',
  styleUrls: ['../schedule-creator/schedule-creator.component.css']
})
export class ScheduleEditorComponent implements OnInit {

    name: string;
    title: string;
    schemaDate: Date;
    formattedDate: string;
    requiredShifts: string[];
    hour: number;
    columns: Columns;
    tableData: Columns[];
    columnFromTable: Array<string>;
    missingShifts: Array<string>;
    openHours: number[];
    tableRows: number[];
    schedule: Schedule;
    startTime: number;
    endTime: number;
    date: Date;
    time: number;
    weekendTable: Columns[];
    tuesdayTable: Columns[];
    wedToFriTable: Columns[];
    juneTable: Columns[];
    tableTypes: any;
    user: any;
    id: any;
    year: any;
    month: any;
    createdAt: Date;
    employees: any;
    shiftsFromDb: any;

  constructor(
    private firebaseService: FirebaseService,
    private employeesService: EmployeesService,
    private shiftTypeService: ShiftTypeService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
    ) {
        this.user = this.user = this.authService.getUser();
        this.name = '';
        this.tableData = [];
        this.schedule = {
            title: this.formattedDate,
            employees: [],
            tableData: this.wedToFriTable,
            responsible: '',
            info: '',
            createdAt: '',
            tableType: [],
            date: this.date,
            time: this.time,
            editedBy: this.user.displayName
        };

        this.tableTypes = [this.weekendTable, this.tuesdayTable, this.wedToFriTable];
        this.columnFromTable = [];
        this.openHours = [];
        this.startTime = 9;
        this.endTime = 17;

        //TODO: get tableTypes from database or service
        this.weekendTable = [
            {hour: 9, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 10, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 11, requiredShifts: ['VE', 'V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
                {hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 14, requiredShifts: ['VS', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 15, requiredShifts: ['Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 16, requiredShifts: ['VE', 'C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 17, requiredShifts: ['TA/V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 18, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
                ];

            this.wedToFriTable = [
                {hour: 9, requiredShifts: [],
                missingShifts: [], assignedShifts: [] },
                {hour: 10, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 11, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
                {hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 14, requiredShifts: ['VS', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 15, requiredShifts: ['VE', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 16, requiredShifts: ['C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 17, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
                ];

            this.tuesdayTable = [
                {hour: 9, requiredShifts: [],
                missingShifts: [], assignedShifts: [] },
                {hour: 10, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 11, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
                {hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 14, requiredShifts: ['VS', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 15, requiredShifts: ['VE', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 16, requiredShifts: ['C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 17, requiredShifts: ['VE', 'V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 18, requiredShifts: ['E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 19, requiredShifts: ['E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 20, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
                ];

                this.juneTable = [
                {hour: 8, requiredShifts: ['Ö','Ö','Ö/B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 9, requiredShifts: ['VE','E','E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 10, requiredShifts: ['E', 'E','VE','B','B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 11, requiredShifts: ['E', 'E', 'VE','B','B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 12, requiredShifts: ['E', 'E', 'B/V','E', 'L/B','B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 13, requiredShifts: ['C/K', 'V/K','E', 'E', 'VE', 'B', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 14, requiredShifts: ['Exp', 'E','VS','E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 15, requiredShifts: ['E','Exp','E', 'VE', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 16, requiredShifts: ['V', 'E', 'C', 'VE', 'E/K', 'K/E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 17, requiredShifts: ['B', 'E','E','TA/V', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 18, requiredShifts: ['E', 'B','VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 19, requiredShifts: ['E','B','B'],
                missingShifts: [], assignedShifts: [] },
                {hour: 20, requiredShifts: ['St', 'St','St'],
                missingShifts: [], assignedShifts: [] },
                ];

   }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.year = this.route.snapshot.params['year'];
        this.month = this.route.snapshot.params['month'];

        this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(schedule => {
            this.schedule = schedule;
            this.schedule.date = new Date(this.schedule.time);
        });

        this.user = JSON.parse(localStorage.getItem('user'));
        
        this.employeesService.getEmployees().subscribe( employees => {
            this.employees = employees.sort((a,b) => {return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);} );
        });

        this.shiftTypeService.getShifts().subscribe( shiftTypes => {
            this.shiftsFromDb = shiftTypes.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
        })

    }

    initiateTable() {
        this.schedule.tableData.forEach((column, index) =>  {
            this.schedule.tableData[index].assignedShifts = this.schedule.employees.map(() => {return ''; } );
            this.schedule.tableData[index].missingShifts = this.schedule.tableData[index].requiredShifts.map((missingShift) => {

            { return missingShift; };
            } );
        });
    }

    saveSchema() {
        let newDate = new Date();
        newDate.setHours(newDate.getHours()+2);
        this.schedule.createdAt = newDate.toUTCString();
        const date = new Date(this.schedule.time);
        this.schedule.editedBy = this.user.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
        this.firebaseService.saveSchedule(this.schedule)
    }


    addRow(event: any) {
        const newEmp = {name: '', hasLunch: false};
        this.schedule.employees.push(newEmp);
    }

    addEmployee(event, row) {
        this.schedule.employees[row].name = event;

        const weekendShopshifts = ['Ö/B', 'B', 'B', 'B', 'L', 'B', 'B', 'B', 'B', 'St'];
        if (event === 'Butiken') {
            if (this.schedule.title.substring(0,3) == 'Lör' || this.schedule.title.substring(0,3) == 'Sön') {
                weekendShopshifts.forEach( (shift, index) => { 
                    this.schedule.tableData[index].assignedShifts.push(shift);
                    this.updateMissingShifts(index, row);
                    this.checkLunches();
                })
            }      
        } else {
            this.schedule.tableData.forEach( (value) => {
            value.assignedShifts.push('');
        })
        }     
    }

    removeEmployee(row) {
        
        let response = confirm('Är du säker på att du vill ta bort ' + 
            this.schedule.employees[row].name +
            ' från schemat?');

        if (response) {
            this.schedule.employees.splice(row, 1);
            this.schedule.tableData.forEach((aShifts, index) => {
            this.schedule.tableData[index].assignedShifts.splice(row, 1);
            this.updateMissingShifts(index, row);
            });
        }
    }

    checkLunches() {
        this.schedule.employees.forEach((row, rowIndex ) => {
            let tempLunch = false;
            this.schedule.tableData.forEach((hour, hourIndex) => {

                if (this.schedule.tableData[hourIndex].assignedShifts[rowIndex] === 'L') {
                        tempLunch = true;
                        this.schedule.employees[rowIndex].hasLunch = true;
                    } else {
                        if (!tempLunch) {
                            this.schedule.employees[rowIndex].hasLunch = false;
                        }
                    }
            } );
        });
    }

    updateMissingShifts(hour: number, row: number) {
        this.schedule.tableData[hour].missingShifts = this.schedule.tableData[hour].requiredShifts.map((x: string) => { return x; } );
        this.schedule.tableData[hour].assignedShifts.forEach((shift: string) => {
            this.schedule.tableData[hour].missingShifts.forEach((misShift: string,  index: number) => {
                if (shift === misShift) {
                    this.schedule.tableData[hour].missingShifts.splice(index, 1);
                }
            });
        });
    }

}

interface Columns {
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
    title: string;
    employees: Employee[];
    tableData: Columns[];
    responsible: string;
    info: string;
    createdAt: string;
    tableType: any;
    date: Date;
    time: number;
    editedBy: string;
}