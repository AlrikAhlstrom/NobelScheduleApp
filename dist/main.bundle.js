webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_schedule_templates_service__ = __webpack_require__("../../../../../src/app/services/schedule-templates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/components/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_schedule_creator_schedule_creator_component__ = __webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_weekDays_wednesday_wednesday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_weekDays_thursday_thursday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/thursday/thursday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_weekDays_friday_friday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/friday/friday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_weekDays_saturday_saturday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/saturday/saturday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_weekDays_sunday_sunday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/sunday/sunday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_weekDays_tuesday_tuesday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/tuesday/tuesday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_employees_employees_component__ = __webpack_require__("../../../../../src/app/components/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shift_types_shift_types_component__ = __webpack_require__("../../../../../src/app/components/shift-types/shift-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_schedules_schedules_component__ = __webpack_require__("../../../../../src/app/components/schedules/schedules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_schedule_editor_schedule_editor_component__ = __webpack_require__("../../../../../src/app/components/schedule-editor/schedule-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_current_schedule_service__ = __webpack_require__("../../../../../src/app/services/current-schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_schedule_types_schedule_types_component__ = __webpack_require__("../../../../../src/app/components/schedule-types/schedule-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_weekDays_monday_monday_component__ = __webpack_require__("../../../../../src/app/components/weekDays/monday/monday.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_schedule_renderer_schedule_renderer_component__ = __webpack_require__("../../../../../src/app/components/schedule-renderer/schedule-renderer.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// TODO: set up firebase database rules to only allow writes from nobel museum employees.
var firebaseConfig = {};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'schedule/:year/:month/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'schedule/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'schedules', component: __WEBPACK_IMPORTED_MODULE_26__components_schedules_schedules_component__["a" /* SchedulesComponent */] },
    { path: 'schedules/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_schedules_schedules_component__["a" /* SchedulesComponent */] },
    { path: 'schedulecreator', component: __WEBPACK_IMPORTED_MODULE_17__components_schedule_creator_schedule_creator_component__["a" /* ScheduleCreatorComponent */] },
    { path: 'schedulecreator/:year/:month/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_schedule_creator_schedule_creator_component__["a" /* ScheduleCreatorComponent */] },
    { path: 'schedulecreator/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_schedule_creator_schedule_creator_component__["a" /* ScheduleCreatorComponent */] },
    { path: 'scheduleEditor/:year/:month/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_schedule_editor_schedule_editor_component__["a" /* ScheduleEditorComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_24__components_employees_employees_component__["a" /* EmployeesComponent */] },
    { path: 'employees/:id', component: __WEBPACK_IMPORTED_MODULE_24__components_employees_employees_component__["a" /* EmployeesComponent */] },
    { path: 'monday', component: __WEBPACK_IMPORTED_MODULE_30__components_weekDays_monday_monday_component__["a" /* MondayComponent */] },
    { path: 'tuesday', component: __WEBPACK_IMPORTED_MODULE_23__components_weekDays_tuesday_tuesday_component__["a" /* TuesdayComponent */] },
    { path: 'wednesday', component: __WEBPACK_IMPORTED_MODULE_18__components_weekDays_wednesday_wednesday_component__["a" /* WednesdayComponent */] },
    { path: 'thursday', component: __WEBPACK_IMPORTED_MODULE_19__components_weekDays_thursday_thursday_component__["a" /* ThursdayComponent */] },
    { path: 'friday', component: __WEBPACK_IMPORTED_MODULE_20__components_weekDays_friday_friday_component__["a" /* FridayComponent */] },
    { path: 'saturday', component: __WEBPACK_IMPORTED_MODULE_21__components_weekDays_saturday_saturday_component__["a" /* SaturdayComponent */] },
    { path: 'sunday', component: __WEBPACK_IMPORTED_MODULE_22__components_weekDays_sunday_sunday_component__["a" /* SundayComponent */] },
    { path: 'shiftTypes', component: __WEBPACK_IMPORTED_MODULE_25__components_shift_types_shift_types_component__["a" /* ShiftTypesComponent */] },
    { path: 'shiftTypes/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_shift_types_shift_types_component__["a" /* ShiftTypesComponent */] },
    { path: 'scheduleTypes', component: __WEBPACK_IMPORTED_MODULE_29__components_schedule_types_schedule_types_component__["a" /* ScheduleTypesComponent */] }
];
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["b" /* AuthMethods */].Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_schedule_creator_schedule_creator_component__["a" /* ScheduleCreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_weekDays_monday_monday_component__["a" /* MondayComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_weekDays_tuesday_tuesday_component__["a" /* TuesdayComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_weekDays_wednesday_wednesday_component__["a" /* WednesdayComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_weekDays_thursday_thursday_component__["a" /* ThursdayComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_weekDays_friday_friday_component__["a" /* FridayComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_weekDays_saturday_saturday_component__["a" /* SaturdayComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_weekDays_sunday_sunday_component__["a" /* SundayComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_shift_types_shift_types_component__["a" /* ShiftTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_schedules_schedules_component__["a" /* SchedulesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_schedule_editor_schedule_editor_component__["a" /* ScheduleEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_schedule_types_schedule_types_component__["a" /* ScheduleTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_schedule_renderer_schedule_renderer_component__["a" /* ScheduleRendererComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_employees_employees_component__["b" /* EmailForm */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_10__services_employees_service__["a" /* EmployeesService */], __WEBPACK_IMPORTED_MODULE_11__services_shift_type_service__["a" /* ShiftTypeService */], __WEBPACK_IMPORTED_MODULE_28__services_current_schedule_service__["a" /* CurrentScheduleService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_schedule_templates_service__["a" /* ScheduleTemplatesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/employees/emailForm.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"multiEmailForm\" >\r\n  <div formArrayName=\"emails\" >\r\n    <div *ngFor=\"let group of multiEmailForm.controls.emails.controls; let i=index\">\r\n      <div formGroupName= {{i}} class=\"input-group\">\r\n        <input formControlName=\"email\" type=\"text\" class=\"form-control wider\">\r\n        <span class=\"input-group-btn\">\r\n          <div type=\"button\" class=\"btn btn-basic btn-sm glyphicon glyphicon-minus pull-right\" (click)=\"deleteEmailForm(i)\"></div></span>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/components/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".more-left {\r\n    margin-left: -200px;\r\n}\r\n\r\n.more-right {\r\n    margin-right: -100px;\r\n}\r\n\r\n.wider {\r\n    width: 300px;\r\n}\r\n\r\n.wider-container {\r\n    width: 335px;\r\n}\r\n\r\n.btn-basic:hover {\r\n    background-color: black;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"(isAdmin)\" class=\"row\" id=\"schemaGenerator\">\n  <div class=\"col-md-6 pull-left more-left\">\n    <h4>Personal</h4>\n    <table class=\"table table-condensed table-striped\" style=\"white-space: nowrap\">\n      <thead>\n        <tr>\n          <th>\n            Förnamn\n          </th>\n          <th>\n            Efternamn\n          </th>\n          <th>\n            Email\n          </th>\n          <th>\n            Titel\n          </th>\n          <th>\n            Visningsklar\n          </th>\n          <th>\n            Admin\n          </th>\n          <th>\n            Uppdatera\n          </th>\n          <th class=\"text-center\">\n            Ta bort\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let employee of employees; let i = index\">\n          <td [innerHtml]=\"employee.firstName\"></td>\n          <td [innerHtml]=\"employee.lastName\"></td>\n          <td >\n            <div *ngFor=\"let mail of employee.emails\">\n              <p [innerHtml]=\"mail\" ></p>\n            </div>\n          </td>\n          <td  [innerHtml]=\"employee.title\"></td>\n          <td class=\"text-center\" [innerHtml]=\"getBool(employee.tourReady)\">\n          </td>\n          <td class=\"text-center\" [innerHtml]=\"getBool(employee.admin)\"></td>\n          <td class=\"text-center\">\n            <div class=\"btn btn-basic btn-sm\" (click)=\"editEmployee(employees[i].firstName, employees[i].lastName, employees[i].title, employees[i].tourReady, employees[i].admin, employees[i].emails, employees[i].$key)\"><span class=\"glyphicon glyphicon-pencil\"></span></div>\n          </td>\n          <td class=\"text-center\">\n            <div class=\"btn btn-basic btn-sm\" (click)=\"deleteEmployee(employee.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-md-3 pull-right\">\n    <div>\n      <form>\n        <h4>Lägg till personal</h4>\n        <div class=\"form-group\">\n          <label>Förnamn</label>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Efternamn</label>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" required>\n        </div> \n          <form [formGroup]=\"emailFormGroup\" class=\"form-group wider-container\" >\n            <label class=\"\">Email</label>\n              <label class=\"pull-right\" >\n                <div class=\"btn btn-basic btn-sm glyphicon glyphicon-plus\" (click)=\"addMultiValueControl()\"></div>\n            </label>\n            <emailForm [group]=\"emailFormGroup.controls.multiEmailForm\" class=\"form-group\" (change)=\"deleteEmail($event)\"></emailForm>\n          </form> \n          <div class=\"form-group\" >\n            <label>Titel</label>\n            <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=\"title\" (ngModelChange)=\"selectType($event)\" name=\"title\" required>\n              <option value=\"museilärare\">museilärare</option>\n              <option value=\"butiken\">butiken</option>\n              <option value=\"annat\">annat</option>\n            </select>\n          </div>\n          <div class=\"form-group\" >\n            <label>Visningsklar</label>\n            <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=tourReady (ngModelChange)=\"selectTourReady($event)\" name=\"tourReady\" required>\n              <option value=\"true\">Ja</option>\n              <option value=\"false\">Nej</option>\n            </select>\n          </div>\n          <div class=\"form-group\" >\n            <label>Admin</label>\n            <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=admin (ngModelChange)=\"selectAdmin($event)\" name=\"admin\" required>\n              <option value=\"true\">Ja</option>\n              <option value=\"false\">Nej</option>\n            </select>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveEmployee()\">Spara</button>\n          <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"clearEmployee()\">Rensa Formulär</button>\n          <!-- <pre>Emails {{emailFormGroup.value | json}}</pre> -->  \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmailForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeesComponent = (function () {
    function EmployeesComponent(employeesService, authService, fb) {
        this.employeesService = employeesService;
        this.authService = authService;
        this.fb = fb;
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
        this.emails = [];
        this.emailsCopy = [];
        this.id = '';
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getEmployees().subscribe(function (employees) {
            _this.employees = employees.sort(function (a, b) { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); });
        });
        this.initEmailFormGroup();
    };
    EmployeesComponent.prototype.addMultiValueControl = function () {
        this.emailGrandChildGroup.push(this.fb.group({ email: [''] }));
    };
    EmployeesComponent.prototype.saveEmployee = function () {
        var _this = this;
        this.emailsCopy = [];
        this.emailGrandChildGroup.value.forEach(function (emailForm) {
            _this.emailsCopy.push(emailForm.email);
        });
        var employee = {
            firstName: this.firstName,
            lastName: this.lastName,
            title: this.title,
            tourReady: this.tourReady,
            admin: this.admin,
            emails: this.emailsCopy
        };
        var duplicateEmails = [];
        var _employees = this.employeesService.getEmployees();
        _employees.subscribe(function (employees) {
            employees.forEach(function (employee) {
                employee.emails.forEach(function (email, i) {
                    _this.emailsCopy.forEach(function (formEmail) {
                        if (_this.id.length > 1) {
                            if (formEmail === email && employee.$key !== _this.id) {
                                duplicateEmails.push(formEmail + ' används redan av ' + employee.firstName + ' ' + employee.lastName + '.');
                            }
                        }
                        else {
                            if (formEmail === email) {
                                duplicateEmails.push(formEmail + ' används redan av ' + employee.firstName + ' ' + employee.lastName + '.');
                            }
                        }
                    });
                });
            });
        });
        if (duplicateEmails.length === 0) {
            if (this.id.length > 1) {
                this.employeesService.updateEmployee(this.id, employee);
            }
            else {
                this.employeesService.saveEmployee(employee);
            }
        }
        else {
            duplicateEmails.forEach(function (message) {
                alert(message);
            });
        }
    };
    EmployeesComponent.prototype.deleteEmployee = function (id) {
        this.employeesService.deleteEmployee(id);
        this.clearEmployee();
    };
    EmployeesComponent.prototype.clearEmployee = function () {
        this.firstName = '';
        this.lastName = '';
        this.title = '';
        this.tourReady = null;
        this.admin = null;
        this.emails = [];
        this.id = '';
        this.emailsCopy = [];
        this.initEmailFormGroup();
    };
    EmployeesComponent.prototype.clearEmails = function () {
        var _this = this;
        this.emailGrandChildGroup.value.forEach(function (element, index) {
            if (index === 1) {
                _this.emailsCopy.splice(1, 1);
            }
        });
        this.initEmailFormGroup();
        this.emailsCopy.forEach(function (email) {
            _this.emailGrandChildGroup.push(_this.fb.group({ email: [email] }));
        });
    };
    EmployeesComponent.prototype.deleteEmail = function (event) {
        var _this = this;
        this.emailsCopy = [];
        this.emailGrandChildGroup.value.forEach(function (group, index) {
            if (index !== event) {
                _this.emailsCopy.push(group.email);
            }
        });
        this.initEmailFormGroup();
        this.emailsCopy.forEach(function (email) {
            _this.emailGrandChildGroup.push(_this.fb.group({ email: [email] }));
        });
    };
    EmployeesComponent.prototype.initEmailFormGroup = function () {
        this.emailGrandChildGroup = this.fb.array([]);
        this.emailChildGroup = this.fb.group({ emails: this.emailGrandChildGroup });
        this.emailFormGroup = this.fb.group({ multiEmailForm: this.emailChildGroup });
        if (this.id.length < 1) {
            this.emailGrandChildGroup.push(this.fb.group({ email: [''] }));
        }
    };
    EmployeesComponent.prototype.editEmployee = function (firstName, lastName, title, tourReady, admin, emails, id) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.tourReady = tourReady;
        this.admin = admin;
        this.id = id;
        this.emails = emails;
        this.emailsCopy = this.emails.slice();
        this.initEmailFormGroup();
        emails.forEach(function (email) {
            _this.emailGrandChildGroup.push(_this.fb.group({ email: [email] }));
        });
    };
    EmployeesComponent.prototype.selectType = function (title) {
        this.title = title;
    };
    EmployeesComponent.prototype.selectTourReady = function (bool) {
        this.tourReady = bool;
    };
    EmployeesComponent.prototype.selectAdmin = function (bool) {
        this.admin = bool;
    };
    EmployeesComponent.prototype.getBool = function (text) {
        if (text === "true") {
            return "ja";
        }
        else {
            return "nej";
        }
    };
    EmployeesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__("../../../../../src/app/components/employees/employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_employees_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_employees_service__["a" /* EmployeesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object])
    ], EmployeesComponent);
    return EmployeesComponent;
    var _a, _b, _c;
}());

var EmailForm = (function () {
    function EmailForm() {
        this.change = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    EmailForm.prototype.deleteEmailForm = function (index) {
        this.change.emit(index);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], EmailForm.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('group'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormGroup */]) === "function" && _b || Object)
    ], EmailForm.prototype, "multiEmailForm", void 0);
    EmailForm = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'emailForm',
            template: __webpack_require__("../../../../../src/app/components/employees/emailForm.html"),
            styles: [__webpack_require__("../../../../../src/app/components/employees/employees.component.css")]
        })
    ], EmailForm);
    return EmailForm;
    var _a, _b;
}());

//# sourceMappingURL=employees.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_schedule_service__ = __webpack_require__("../../../../../src/app/services/current-schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(currentScheduleService, af) {
        this.currentScheduleService = currentScheduleService;
        this.af = af;
        var today = new Date;
        this.weekday = this.currentScheduleService.getDayname(today.getDay());
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_current_schedule_service__["a" /* CurrentScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_current_schedule_service__["a" /* CurrentScheduleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminDropdown {\r\n    color:#ffffff;\r\n    padding-top: 14.5px;\r\n    padding-bottom: 14.5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    line-height: 21px;\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.adminDropdown:hover {\r\n    background-color: #1967be;\r\n}\r\n\r\n.smallText {\r\n    font-size: small\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav *ngIf=\"(smallDevice)\" class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <a *ngIf=\"(smallDevice)\" (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-brand navbar-left smallText\" >Veckodagar</a>\n          <ul class=\"dropdown-menu\" [ngbCollapse]=\"!isCollapsed\">\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['monday']\" (click)=\"collapse()\">Måndag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['tuesday']\" (click)=\"collapse()\">Tisdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['wednesday']\" (click)=\"collapse()\">Onsdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['thursday']\" (click)=\"collapse()\">Torsdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['friday']\" (click)=\"collapse()\">Fredag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['saturday']\" (click)=\"collapse()\">Lördag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['sunday']\" (click)=\"collapse()\">Söndag</a></li>\n          </ul>\n         <a *ngIf=\"(isAdmin)\" (click)=\"isCollapsed2 = !isCollapsed2\" class=\"adminDropdown navbar-brand smallText\" >Admin</a>\n         <ul *ngIf=\"(!isCollapsed2)\" class=\"dropdown-menu\" (click)=\"!isCollapsed2 = isCollapsed2\" [ngbCollapse]=\"isCollapsed2\">\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/schedulecreator']\">Skapa Schema</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/schedules']\">Scheman</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/employees']\">Personal</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/shiftTypes']\">Skift</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/scheduleTypes']\">Schemamallar</a></li>        \n          </ul>\n          <a *ngIf=\"!(af.auth | async)\" (click)=\"login()\" class=\"navbar-brand smallText\">Logga in</a>\n        <a *ngIf=\"(af.auth | async)\" (click)=\"logout()\" class=\"navbar-brand smallText\">Logga ut</a>\n    </div>\n  </div>\n</nav>\n<nav *ngIf=\"(!smallDevice)\" class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"(!isCollapsed)\" (click)=\"isCollapsed = !isCollapsed\"><a>Veckodagar</a></li>\n        <li>\n          <ul class=\"nav navbar-nav navbar-right\" [ngbCollapse]=\"!isCollapsed\">\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['monday']\" (click)=\"collapse()\">Måndag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['tuesday']\" (click)=\"collapse()\">Tisdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['wednesday']\" (click)=\"collapse()\">Onsdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['thursday']\" (click)=\"collapse()\">Torsdag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['friday']\" (click)=\"collapse()\">Fredag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['saturday']\" (click)=\"collapse()\">Lördag</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['sunday']\" (click)=\"collapse()\">Söndag</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n         <li *ngIf=\"(isAdmin)\" (click)=\"isCollapsed2 = !isCollapsed2\" class=\"adminDropdown\" >Admin\n          <ul *ngIf=\"(!isCollapsed2)\" class=\"dropdown-menu\" (click)=\"!isCollapsed2 = isCollapsed2\" [ngbCollapse]=\"isCollapsed2\">\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/schedulecreator']\">Skapa Schema</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/schedules']\">Scheman</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/employees']\">Personal</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/shiftTypes']\">Skift</a></li>\n            <li *ngIf=\"(af.auth | async)\"><a [routerLink]=\"['/scheduleTypes']\">Schemamallar</a></li>        \n          </ul>\n        </li>\n        <li *ngIf=\"!(af.auth | async)\" ><a (click)=\"login()\">Logga in</a></li>\n        <li *ngIf=\"(af.auth | async)\"><a (click)=\"logout()\">Logga ut</a></li>\n         <li *ngIf=\"(af.auth| async)\"><a>{{displayName}}</a></li> \n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(af, firebaseService, authService, flashMessage, router) {
        this.af = af;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isCollapsed = true;
        this.isCollapsed2 = true;
        this.smallDevice = false;
        this.isAdmin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 800) {
            this.isCollapsed = false;
            this.smallDevice = true;
        }
        this.initDisplayName = '';
        this.isAdmin = false;
        this.displayName = '';
        this.initDisplayName = '';
    };
    NavbarComponent.prototype.ngDoCheck = function () {
        var user = this.authService.getUser();
        if (user.hasOwnProperty('isAdmin')) {
            user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
            user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
            user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
            this.displayName = user.displayName;
        }
    };
    NavbarComponent.prototype.collapse = function () {
        if (window.innerWidth > 800) {
            this.isCollapsed = true;
        }
        else {
            this.isCollapsed ? this.isCollapsed = false : this.isCollapsed = true;
        }
    };
    NavbarComponent.prototype.collapse2 = function () {
        this.isCollapsed2 ? this.isCollapsed2 = false : this.isCollapsed2 = true;
    };
    NavbarComponent.prototype.login = function () {
        this.authService.authUser();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logOut();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-creator/schedule-creator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shiftButton{\r\n\r\n    margin-top:30px;\r\n\r\n}\r\n\r\n.lunchClass {\r\n    color: red;\r\n}\r\n\r\n.required {\r\n    border: solid red 2px;\r\n}\r\n\r\n.timeCell {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.timeCellExport {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 30px;\r\n}\r\n.empNameExport {\r\n    width: 70px;\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n#empNameHead {\r\n    width: 70px;\r\n}\r\n\r\ninput.shiftInput {\r\n    text-transform: uppercase;\r\n}\r\n\r\n#title {\r\n    width: 300px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.form-control {\r\n    width: 70px;\r\n    padding: 5px 5px;\r\n    margin-right: 0;\r\n}\r\n\r\n.employeeName {\r\n     width: 140px;\r\n    padding: 5px 5px 5px;\r\n    margin-right: 0;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.info {\r\n    width: 700px;\r\n    font-weight: bold;\r\n}\r\n\r\n.infoExport {\r\n    font-weight: bold;\r\n}\r\n\r\n.missingShiftList {\r\n\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n#formattedDate {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.shiftCell {\r\n    text-align: center;\r\n}\r\n\r\n#shiftLegend {\r\n    font-weight: normal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedule-creator/schedule-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(isGuide)\" class=\"container\" id=\"schemaGenerator\">\n    <div class=\"row\" *ngIf=\"(!editedSchedule)\">\n        <div *ngIf=\"isAdmin\">\n            <div *ngIf=\"!(scheduleTitle)\" class=\"col-xs-6 col-sm-3\">\n                <div  class=\"form-group\" >\n                    <label>Välj schematyp</label>\n                    <!-- <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=tableType (ngModelChange)=\"selectTableType($event)\" name=\"tableType\" required>\n                        <option value=\"wedToFri\">ons-fre</option>\n                        <option value=\"tuesday\">tisdag</option>\n                        <option value=\"weekend\">helg</option>\n                        <option value=\"june\">Juni</option>\n                        <option value=\"julyWeekday\">Juli vardag</option>\n                        <option value=\"julyWeekend\">Juli helg</option>\n                    </select> -->\n                    <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=template (ngModelChange)=\"selectTemplate($event)\" name=\"template\" required>\n                        <option *ngFor=\"let template of templates\" [ngValue]=\"template.$key\">{{template.templateName}}</option>\n                    </select>\n                </div>\n            </div>\n             <div *ngIf=\"!(scheduleTitle)\" class=\"col-xs-6 col-sm-3\">\n                <div class=\"form-group\">\n                    <p><label>Välj datum</label></p>\n                    <input type=\"date\" [(ngModel)]=\"schemaDate\" (ngModelChange)=\"formatDate($event)\"/>\n                </div>\n            </div> \n        </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"form-group\" >\n        <input *ngIf=\"(!schedule.title)\" class=\"form-control\" id=\"title\" type=\"text\" [(ngModel)]=\"formattedDate\" name=\"title\" required>\n        <input *ngIf=\"(schedule.title)\" class=\"form-control\" id=\"title\" type=\"text\" [(ngModel)]=\"schedule.title\" name=\"title\" required>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n         <table  *ngIf=\"(schedule.tableData)\" class=\"table table-striped table-bordered\" style=\"white-space: nowrap\">\n            <thead>\n                <tr>\n                    <td >Personal</td>    \n                    <td class=\"timeCell\" *ngFor=\"let hour of schedule.tableData; let y = index\">{{hour.hour}}</td>\n                    <td >Lunch?</td>\n                    <td style=\"width: 0px\">Ta bort</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let row of schedule.employees; let r = index\">\n                    <td>\n                        <div class=\"form-group\" >\n                            <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=schedule.employees[r].name (ngModelChange)= \"addEmployee($event, r)\"   name=\"emp\" required>\n                                <option *ngFor=\"let employee of employees\" [ngValue]=\"employee.firstName\">{{employee.firstName}}</option>\n                            </select>\n                        </div>\n                    </td>\n                    <td *ngFor=\"let hour of schedule.tableData; let h = index\" class=\"shiftCellz\">\n                        <div class=\"form-group\" >\n                            <select class=\"form-control\" type=\"text\" [(ngModel)]=schedule.tableData[h].assignedShifts[r] (ngModelChange)= \"updateMissingShifts(h, r); checkLunches()\"   name=\"cell\" required>\n                                <option *ngFor=\"let shift of shiftsFromDb\" [ngValue]=\"shift.name\">{{shift.name}}</option>\n                            </select>\n                        </div>           \n                    </td>\n                    <td class=\"text center\" [ngClass]=\"{'lunchClass': !getBool(row.hasLunch)}\" >{{this.schedule.employees[r].hasLunch}}</td>\n                    <td class=\"text-center\">\n                        <button class=\"btn btn-sm btn-default\" (click)=\"removeEmployee(r)\" >X</button>\n                    </td>\n                </tr>\n                <tr>                 \n                </tr>\n            </tbody>\n            <tfoot >\n                <tr >   \n                    <td ><button class=\"btn btn-sm btn-primary\" (click)=\"addRow()\" >Lägg till personal</button></td>\n                    <td *ngFor=\"let hour of schedule.tableData; let b = index\" style=\"color: red\">\n                      <ul class=\"missingShiftList\" >\n                        <li  *ngFor=\"let ms of schedule.tableData[b].missingShifts\">{{ms}}</li>\n                      </ul>\n                    </td>\n                </tr>\n            </tfoot>\n        </table> \n        <div class=\"form-group\" >\n            <label>Ansvarig:</label>\n            <input class=\"form-control\" class=\"info\" type=\"text\" [(ngModel)]=\"this.schedule.responsible\" name=\"responsible\" required>\n        </div>\n        <br>\n        <br>\n        <div class=\"form-group\" >\n            <label>Övrig info:</label>\n            <input class=\"form-control\" class=\"info\" type=\"text\" [(ngModel)]=\"this.schedule.info\" name=\"info\" required>\n        </div>\n\n        <br>\n        <br>\n         <div *ngIf=\"(!editedSchedule)\">\n            <div *ngIf=\"(isAdmin)\" class=\"pull-right text-right\">\n            <button class=\"btn btn-success\" (click)=\"saveSchedule()\" >Spara Schema</button>\n         </div> \n        </div>\n        \n        <div *ngIf=\"editedSchedule\" class=\"pull-right text-right\">\n            <button class=\"btn btn-success\" (click)=\"updateSchedule()\" >Uppdatera Schema</button>\n        </div>\n    <br/>\n    <br/>\n    <hr>\n<!-- ************************************************************************** -->\n    <div *ngIf=\"(schedule.tableData)\" class=\"container\" id=\"schemaGenerator2\">\n        \n            <br/>\n            <div id=\"formattedDate\">{{formattedDate}}</div>\n            <br/>\n             <table class=\"table table-striped table-bordered\" >\n                <thead>\n                    <tr>\n                        <td id=\"empNameHead\"></td>    \n                        <td class=\"timeCellExport\" *ngFor=\"let hour of schedule.tableData; let y = index\">{{hour.hour}}</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr  *ngFor=\"let row of schedule.employees; let r = index\">\n                        <td class=\"empNameExport\">\n                            {{schedule.employees[r].name}}\n                        </td>\n                        <td *ngFor=\"let hour of schedule.tableData; let h = index\" class=\"shiftCell\" style=\"text-transform: uppercase\">\n                            {{schedule.tableData[h].assignedShifts[r]}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table> \n            <br>\n            <br>\n            <div class=\"infoExport\">\n                Ansvarig: {{this.schedule.responsible}}\n            </div>\n            <br>\n            <div class=\"infoExport\">\n                {{this.schedule.info}}\n            </div>\n            <br>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/schedule-creator/schedule-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_schedule_templates_service__ = __webpack_require__("../../../../../src/app/services/schedule-templates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleCreatorComponent = (function () {
    function ScheduleCreatorComponent(firebaseService, employeesService, shiftTypeService, scheduleTemplatesService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.employeesService = employeesService;
        this.shiftTypeService = shiftTypeService;
        this.scheduleTemplatesService = scheduleTemplatesService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        var user = this.authService.getUser();
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
            this.schedule.title = this.title;
        }
        this.tableTypes = [this.weekendTable, this.tuesdayTable, this.wedToFriTable];
        this.columnFromTable = [];
        this.openHours = [];
        /*this.startTime = 9;
        this.endTime = 17;*/
    }
    ScheduleCreatorComponent.prototype.ngOnInit = function () {
        // initial values for testing
        /* this.schedule.tableData = this.weekendTable;
         this.schedule.title = 'Söndag 26 Mar 2017';
         this.initiateTable();*/
        var _this = this;
        /* this.schedule.tableData = this.julyWeekdayTable;
         this.schedule.title = 'Saturday 3 Jul 2017';
         this.addEmployeeFromTableTypeSelection();
         this.initiateTable();*/
        //this.user = JSON.parse(localStorage.getItem('user'));
        if (this.route.snapshot.params['year']) {
            this.id = this.route.snapshot.params['id'];
            this.year = this.route.snapshot.params['year'];
            this.month = this.route.snapshot.params['month'];
            this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(function (schedule) {
                _this.schedule = schedule;
                _this.schedule.employees = schedule.employees;
                _this.schedule.tableData = schedule.tableData;
                _this.title = schedule.title;
                _this.initiateTable();
                if ((typeof _this.schedule.editedBy) === "undefined") {
                    _this.editedSchedule = false;
                }
                else {
                    _this.editedSchedule = true;
                }
            });
        }
        else {
            this.schedule.employees = [];
            this.editedSchedule = false;
        }
        this.employeesService.getEmployees().subscribe(function (employees) {
            _this.employees = employees.sort(function (a, b) { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); });
        });
        this.shiftTypeService.getShifts().subscribe(function (shiftTypes) {
            _this.shiftsFromDb = shiftTypes.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
        this.getTemplates();
    };
    ScheduleCreatorComponent.prototype.saveSchedule = function () {
        var response = confirm('Vill du spara schemat?');
        var newDate = new Date();
        newDate.setHours(newDate.getHours() + 2);
        this.schedule.createdAt = newDate.toUTCString();
        var date = new Date(this.schedule.time);
        if (response) {
            if (this.year) {
                this.schedule.editedBy = this.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
                this.firebaseService.saveSchedule(this.schedule);
                this.router.navigate(['/schedule/' + this.year + '/' + this.month + '/' + this.id]);
            }
            else {
                this.firebaseService.saveSchedule(this.schedule);
                this.router.navigate(['/schedule/' + this.year + '/' + this.month + '/' + this.id]);
            }
        }
    };
    ScheduleCreatorComponent.prototype.updateSchedule = function () {
        var _this = this;
        var response = confirm('Vill du spara schemat?');
        if (response) {
            var newDate = new Date();
            newDate.setHours(newDate.getHours() + 2);
            this.schedule.createdAt = newDate.toUTCString();
            this.schedule.editedBy = this.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
            this.schedule = this.firebaseService.updateSchedule(this.schedule, this.year, this.month, this.id).then(function () {
                _this.router.navigate(['/schedule/' + _this.year + '/' + _this.month + '/' + _this.id]);
            });
        }
    };
    ScheduleCreatorComponent.prototype.getTemplates = function () {
        var _this = this;
        this.scheduleTemplatesService.getTemplates().subscribe(function (templates) {
            _this.templates = templates.sort(function (a, b) { return (a.templateName > b.templateName) ? 1 : ((b.templateName > a.templateName) ? -1 : 0); });
        });
    };
    ScheduleCreatorComponent.prototype.selectTemplate = function (id) {
        var _this = this;
        this.ngOnInit();
        this.scheduleTemplatesService.getTemplate(id).subscribe(function (template) {
            _this.template = template;
            _this.schedule.tableData = template.tableData.columns;
            _this.schedule.employees = template.tableData.rows.map(function (employee) {
                var employeeToSchedule = '';
                if (typeof employee === 'string') {
                    employeeToSchedule = employee;
                }
                return { name: employeeToSchedule, hasLunch: false };
            });
        });
        this.initiateTable();
    };
    ScheduleCreatorComponent.prototype.initiateTable = function () {
        var _this = this;
        if (!this.route.snapshot.params['year']) {
            this.schedule.tableData.forEach(function (column, index) {
                _this.schedule.tableData[index].missingShifts = _this.schedule.tableData[index].requiredShifts.map(function (missingShift) {
                    {
                        return missingShift;
                    }
                    ;
                });
            });
        }
        else {
            this.updateAllMissingShifts();
        }
        this.checkLunches();
    };
    ScheduleCreatorComponent.prototype.initiateAssignedShiftTemplate = function () {
        var _this = this;
        this.template.tableData.rows.forEach(function (row) {
            _this.schedule.employees.push({ name: row, hasLunch: false });
        });
        this.checkLunches();
        this.schedule.tableData.forEach(function (column, i) {
            column.requiredShifts = column.assignedShifts.map(function (requiredShift) {
                if (requiredShift.length > 0) {
                    return requiredShift;
                }
            });
        });
    };
    ScheduleCreatorComponent.prototype.formatDate = function (event) {
        var d = new Date(event);
        //TODO: put weekday and months in a service.
        var weekday = new Array(7);
        weekday[0] = 'Söndag';
        weekday[1] = 'Måndag';
        weekday[2] = 'Tisdag';
        weekday[3] = 'Onsdag';
        weekday[4] = 'Torsdag';
        weekday[5] = 'Fredag';
        weekday[6] = 'Lördag';
        var months = new Array(12);
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
        if (!this.year) {
            this.formattedDate = weekday[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
            this.schedule.title = this.formattedDate;
            this.schedule.time = d.getTime();
            this.schedule.date = d;
        }
    };
    ScheduleCreatorComponent.prototype.addRow = function (event) {
        var newEmp = { name: '', hasLunch: false };
        this.schedule.employees.push(newEmp);
    };
    ScheduleCreatorComponent.prototype.addEmployeeFromTableTypeSelection = function () {
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: '', hasLunch: false });
        this.schedule.employees.push({ name: 'Butiken', hasLunch: false });
    };
    ScheduleCreatorComponent.prototype.addEmployee = function (event, row) {
        this.schedule.employees[row].name = event;
        this.schedule.tableData.forEach(function (value) {
            value.assignedShifts.push('');
        });
        this.checkLunches();
    };
    ScheduleCreatorComponent.prototype.removeEmployee = function (row) {
        var _this = this;
        this.schedule.employees.splice(row, 1);
        this.schedule.tableData.forEach(function (aShifts, index) {
            _this.schedule.tableData[index].assignedShifts.splice(row, 1);
            _this.updateMissingShifts(index, row);
        });
    };
    ScheduleCreatorComponent.prototype.checkLunches = function () {
        var _this = this;
        this.schedule.employees.forEach(function (row, rowIndex) {
            var tempLunch = false;
            _this.schedule.tableData.forEach(function (hour, hourIndex) {
                if (_this.schedule.tableData[hourIndex].assignedShifts[rowIndex] === 'L') {
                    tempLunch = true;
                    _this.schedule.employees[rowIndex].hasLunch = "ja";
                }
                else {
                    if (!tempLunch) {
                        _this.schedule.employees[rowIndex].hasLunch = "nej";
                    }
                }
            });
        });
    };
    ScheduleCreatorComponent.prototype.updateAllMissingShifts = function () {
        this.schedule.tableData.forEach(function (column) {
            column.missingShifts = column.requiredShifts.map(function (requiredShift) { return requiredShift; });
            column.assignedShifts.forEach(function (shift) {
                column.missingShifts.forEach(function (missingShift, index) {
                    if (shift === missingShift) {
                        column.missingShifts.splice(index, 1);
                    }
                });
            });
        });
    };
    ScheduleCreatorComponent.prototype.updateMissingShifts = function (hour, row) {
        var _this = this;
        this.schedule.tableData[hour].missingShifts = this.schedule.tableData[hour].requiredShifts.map(function (requiredShift) { return requiredShift; });
        this.schedule.tableData[hour].assignedShifts.forEach(function (shift) {
            _this.schedule.tableData[hour].missingShifts.forEach(function (missingShift, index) {
                if (shift === missingShift) {
                    _this.schedule.tableData[hour].missingShifts.splice(index, 1);
                }
            });
        });
    };
    ScheduleCreatorComponent.prototype.getBool = function (text) {
        if (text === "ja") {
            return true;
        }
        else {
            return false;
        }
    };
    ScheduleCreatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-schedule-creator',
            template: __webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_employees_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_employees_service__["a" /* EmployeesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__["a" /* ShiftTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__["a" /* ShiftTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_schedule_templates_service__["a" /* ScheduleTemplatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_schedule_templates_service__["a" /* ScheduleTemplatesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object])
    ], ScheduleCreatorComponent);
    return ScheduleCreatorComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=schedule-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-editor/schedule-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"schemaGenerator\">\n    <br>\n    <div>\n      <h4 style=\"font-weight: bold\">{{schedule.title}}</h4>\n    </div>\n    <br>\n    <br>\n        <table  *ngIf=\"(schedule.tableData)\" class=\"table table-striped table-bordered\" style=\"white-space: nowrap\">\n            <thead>\n                <tr>\n                    <td >Personal</td>    \n                    <td class=\"timeCell\" *ngFor=\"let hour of schedule.tableData; let y = index\">{{hour.hour}}</td>\n                    <td >Lunch?</td>\n                    <td style=\"width: 0px\">Ta bort</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let row of schedule.employees; let r = index\">\n                    <td>\n                        <div class=\"form-group\" >\n                            <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=schedule.employees[r].name (ngModelChange)= \"addEmployee($event, r)\"   name=\"emp\" required>\n                                <option *ngFor=\"let employee of employees\" [ngValue]=\"employee.firstName\">{{employee.firstName}}</option>\n                            </select>\n                        </div>\n                    </td>\n                    <td *ngFor=\"let hour of schedule.tableData; let h = index\" class=\"shiftCellz\">\n                        <div class=\"form-group\" >\n                             <select class=\"form-control\" type=\"text\" [(ngModel)]=schedule.tableData[h].assignedShifts[r] (ngModelChange)= \"updateMissingShifts(h, r); checkLunches()\"   name=\"cell\" required>\n                                <option *ngFor=\"let shift of shiftsFromDb\" [ngValue]=\"shift.name\">{{shift.name}}</option>\n                            </select>\n                        </div>           \n                    </td>\n                    <td [ngClass]=\"{'lunchClass': !this.schedule.employees[r].hasLunch}\" >{{this.schedule.employees[r].hasLunch}}</td>\n                    <td class=\"text-center\">\n                        <button class=\"btn btn-sm btn-default\" (click)=\"removeEmployee(r)\" >X</button>\n                    </td>\n                </tr>\n                <tr>                 \n                </tr>\n            </tbody>\n            <tfoot >\n                <tr >   \n                    <td ><button class=\"btn btn-sm btn-primary\" (click)=\"addRow()\" >Lägg till personal</button></td>\n                    <td *ngFor=\"let hour of schedule.tableData; let b = index\" style=\"color: red\">\n                      <ul class=\"missingShiftList\" >\n                        <li  *ngFor=\"let ms of schedule.tableData[b].missingShifts\">{{ms}}</li>\n                      </ul>\n                    </td>\n                </tr>\n            </tfoot>\n        </table>\n        <div class=\"form-group\" >\n            <label>Ansvarig:</label>\n            <input class=\"form-control\" class=\"info\" type=\"text\" [(ngModel)]=\"this.schedule.responsible\" name=\"responsible\" required>\n        </div>\n        <br>\n        <br>\n        <div class=\"form-group\" >\n            <label>Övrig info:</label>\n            <input class=\"form-control\" class=\"info\" type=\"text\" [(ngModel)]=\"this.schedule.info\" name=\"info\" required>\n        </div>\n\n        <br>\n        <br>\n        <button class=\"btn btn-success\" (click)=\"saveSchema()\" >Spara Schema</button>\n    <br/>\n    <br/>\n    <hr>\n<!-- ************************************************************************** -->\n    <div *ngIf=\"(schedule.tableData)\" class=\"container\" id=\"schemaGenerator2\">\n        \n            <br/>\n            <div id=\"formattedDate\">{{formattedDate}}</div>\n            <br/>\n            <table class=\"table table-striped table-bordered\" >\n                <thead>\n                    <tr>\n                        <td id=\"empNameHead\"></td>    \n                        <td class=\"timeCellExport\" *ngFor=\"let hour of schedule.tableData; let y = index\">{{hour.hour}}</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr  *ngFor=\"let row of schedule.employees; let r = index\">\n                        <td class=\"empNameExport\">\n                            {{schedule.employees[r].name}}\n                        </td>\n                        <td *ngFor=\"let hour of schedule.tableData; let h = index\" class=\"shiftCell\" style=\"text-transform: uppercase\">\n                            {{schedule.tableData[h].assignedShifts[r]}}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <br>\n            <br>\n            <div class=\"infoExport\">\n                Ansvarig: {{this.schedule.responsible}}\n            </div>\n            <br>\n            <div class=\"infoExport\">\n                {{this.schedule.info}}\n            </div>\n            <br>\n        <table id=\"shiftLegend\">\n        <tr>\n            <td>B = sdfgbutik</td>\n        </tr>\n        <tr>\n            <td>BV= bokad visning</td>\n        </tr>\n        <tr>\n            <td >C= cirkulera</td>\n        </tr>\n        <tr>\n            <td >E = entr&eacute;</td>\n        </tr>\n        <tr>\n            <td >Exp = Experiment</td>\n        </tr>\n        <tr>\n            <td >K = kontor</td>\n        </tr>\n        <tr>\n            <td >L = lunch</td>\n        </tr>\n        <tr>\n            <td >M = m&ouml;te</td>\n        </tr>\n        <tr>\n            <td>P = program</td>\n        </tr>\n        <tr>\n            <td >St = Stänga</td>\n        </tr>\n        <tr>\n            <td >VE = visning på engelska</td>\n        </tr>\n        <tr>\n            <td >VS = visning på svenska</td>\n        </tr>\n        <tr>\n            <td >Ö = öppna</td>\n        </tr>\n    </table>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/schedule-editor/schedule-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScheduleEditorComponent = (function () {
    function ScheduleEditorComponent(firebaseService, employeesService, shiftTypeService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.employeesService = employeesService;
        this.shiftTypeService = shiftTypeService;
        this.authService = authService;
        this.router = router;
        this.route = route;
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
            { hour: 9, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 10, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 11, requiredShifts: ['VE', 'V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
            { hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 14, requiredShifts: ['VS', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 15, requiredShifts: ['Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 16, requiredShifts: ['VE', 'C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 17, requiredShifts: ['TA/V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 18, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
        ];
        this.wedToFriTable = [
            { hour: 9, requiredShifts: [],
                missingShifts: [], assignedShifts: [] },
            { hour: 10, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 11, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
            { hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 14, requiredShifts: ['VS', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 15, requiredShifts: ['VE', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 16, requiredShifts: ['C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 17, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
        ];
        this.tuesdayTable = [
            { hour: 9, requiredShifts: [],
                missingShifts: [], assignedShifts: [] },
            { hour: 10, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 11, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 12, requiredShifts: ['B', 'E'],
                missingShifts: [], assignedShifts: [] },
            { hour: 13, requiredShifts: ['VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 14, requiredShifts: ['VS', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 15, requiredShifts: ['VE', 'Exp', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 16, requiredShifts: ['C', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 17, requiredShifts: ['VE', 'V', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 18, requiredShifts: ['E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 19, requiredShifts: ['E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 20, requiredShifts: ['St', 'St'],
                missingShifts: [], assignedShifts: [] },
        ];
        this.juneTable = [
            { hour: 8, requiredShifts: ['Ö', 'Ö', 'Ö/B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 9, requiredShifts: ['VE', 'E', 'E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 10, requiredShifts: ['E', 'E', 'VE', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 11, requiredShifts: ['E', 'E', 'VE', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 12, requiredShifts: ['E', 'E', 'B/V', 'E', 'L/B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 13, requiredShifts: ['C/K', 'V/K', 'E', 'E', 'VE', 'B', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 14, requiredShifts: ['Exp', 'E', 'VS', 'E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 15, requiredShifts: ['E', 'Exp', 'E', 'VE', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 16, requiredShifts: ['V', 'E', 'C', 'VE', 'E/K', 'K/E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 17, requiredShifts: ['B', 'E', 'E', 'TA/V', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 18, requiredShifts: ['E', 'B', 'VE', 'E', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 19, requiredShifts: ['E', 'B', 'B'],
                missingShifts: [], assignedShifts: [] },
            { hour: 20, requiredShifts: ['St', 'St', 'St'],
                missingShifts: [], assignedShifts: [] },
        ];
    }
    ScheduleEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.year = this.route.snapshot.params['year'];
        this.month = this.route.snapshot.params['month'];
        this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(function (schedule) {
            _this.schedule = schedule;
            _this.schedule.date = new Date(_this.schedule.time);
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.employeesService.getEmployees().subscribe(function (employees) {
            _this.employees = employees.sort(function (a, b) { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); });
        });
        this.shiftTypeService.getShifts().subscribe(function (shiftTypes) {
            _this.shiftsFromDb = shiftTypes.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
    };
    ScheduleEditorComponent.prototype.initiateTable = function () {
        var _this = this;
        this.schedule.tableData.forEach(function (column, index) {
            _this.schedule.tableData[index].assignedShifts = _this.schedule.employees.map(function () { return ''; });
            _this.schedule.tableData[index].missingShifts = _this.schedule.tableData[index].requiredShifts.map(function (missingShift) {
                {
                    return missingShift;
                }
                ;
            });
        });
    };
    ScheduleEditorComponent.prototype.saveSchema = function () {
        var newDate = new Date();
        newDate.setHours(newDate.getHours() + 2);
        this.schedule.createdAt = newDate.toUTCString();
        var date = new Date(this.schedule.time);
        this.schedule.editedBy = this.user.displayName + ' ' + this.schedule.createdAt.substring(5, 12) + this.schedule.createdAt.substring(17, 22);
        this.firebaseService.saveSchedule(this.schedule);
    };
    ScheduleEditorComponent.prototype.addRow = function (event) {
        var newEmp = { name: '', hasLunch: false };
        this.schedule.employees.push(newEmp);
    };
    ScheduleEditorComponent.prototype.addEmployee = function (event, row) {
        var _this = this;
        this.schedule.employees[row].name = event;
        var weekendShopshifts = ['Ö/B', 'B', 'B', 'B', 'L', 'B', 'B', 'B', 'B', 'St'];
        if (event === 'Butiken') {
            if (this.schedule.title.substring(0, 3) == 'Lör' || this.schedule.title.substring(0, 3) == 'Sön') {
                weekendShopshifts.forEach(function (shift, index) {
                    _this.schedule.tableData[index].assignedShifts.push(shift);
                    _this.updateMissingShifts(index, row);
                    _this.checkLunches();
                });
            }
        }
        else {
            this.schedule.tableData.forEach(function (value) {
                value.assignedShifts.push('');
            });
        }
    };
    ScheduleEditorComponent.prototype.removeEmployee = function (row) {
        var _this = this;
        var response = confirm('Är du säker på att du vill ta bort ' +
            this.schedule.employees[row].name +
            ' från schemat?');
        if (response) {
            this.schedule.employees.splice(row, 1);
            this.schedule.tableData.forEach(function (aShifts, index) {
                _this.schedule.tableData[index].assignedShifts.splice(row, 1);
                _this.updateMissingShifts(index, row);
            });
        }
    };
    ScheduleEditorComponent.prototype.checkLunches = function () {
        var _this = this;
        this.schedule.employees.forEach(function (row, rowIndex) {
            var tempLunch = false;
            _this.schedule.tableData.forEach(function (hour, hourIndex) {
                if (_this.schedule.tableData[hourIndex].assignedShifts[rowIndex] === 'L') {
                    tempLunch = true;
                    _this.schedule.employees[rowIndex].hasLunch = true;
                }
                else {
                    if (!tempLunch) {
                        _this.schedule.employees[rowIndex].hasLunch = false;
                    }
                }
            });
        });
    };
    ScheduleEditorComponent.prototype.updateMissingShifts = function (hour, row) {
        var _this = this;
        this.schedule.tableData[hour].missingShifts = this.schedule.tableData[hour].requiredShifts.map(function (x) { return x; });
        this.schedule.tableData[hour].assignedShifts.forEach(function (shift) {
            _this.schedule.tableData[hour].missingShifts.forEach(function (misShift, index) {
                if (shift === misShift) {
                    _this.schedule.tableData[hour].missingShifts.splice(index, 1);
                }
            });
        });
    };
    ScheduleEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule-editor',
            template: __webpack_require__("../../../../../src/app/components/schedule-editor/schedule-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_employees_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_employees_service__["a" /* EmployeesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__["a" /* ShiftTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shift_type_service__["a" /* ShiftTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
    ], ScheduleEditorComponent);
    return ScheduleEditorComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=schedule-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-renderer/schedule-renderer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@media(max-width: 570px) {\r\n    #schemaGenerator2 {\r\n        font-size: 12px;\r\n    }\r\n    #formattedDate {\r\n        font-size: 14px !important;\r\n    }\r\n    .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\r\n        padding: 6px !important;\r\n    }\r\n    .btn-change {\r\n        font-size: 10px;\r\n    }\r\n    .table {\r\n         margin-left: -14px;\r\n    }\r\n}\r\n\r\n.legend {\r\n    font-size: small;\r\n    font-weight: normal;\r\n    border-top: 0px red solid;\r\n}\r\n\r\n.currentHour {\r\n    /*  background-color: #f0f2f4; */\r\n     background-color: #99c9ff;\r\n}\r\n\r\n.shiftHover:hover {\r\n     background-color: black;\r\n   //font-size: large;\r\n}\r\n\r\n.currentIndex {\r\n\r\n    background-color: #e5f1ff;\r\n\r\n}\r\n\r\n.currentEmployee {\r\n\r\n    font-weight: bold;\r\n}\r\n\r\n.currentName {\r\n    font-size: large;\r\n\r\n}\r\n\r\n.table {\r\n    text-align: center;\r\n}\r\n\r\n.employeeName {\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n\r\n.hour {\r\n    font-weight: bold;\r\n}\r\n\r\n.timeCell {\r\n    font-weight: bold;\r\n}\r\n\r\n.timeCellExport {\r\n    font-weight: bold;\r\n    width: 30px;\r\n    vertical-align: bottom !important; \r\n}\r\n\r\n\r\n\r\n.empNameExport {\r\n    width: 70px;\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n#empName_td {\r\n    width: 70px;\r\n}\r\n\r\n\r\n\r\n#title {\r\n    width: 300px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.form-control {\r\n    width: 70px;\r\n    padding: 5px 5px;\r\n    margin-right: 0;\r\n}\r\n\r\n.employeeName {\r\n     width: 140px;\r\n    padding: 5px 5px 5px;\r\n    margin-right: 0;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.info {\r\n    width: 700px;\r\n    font-weight: bold;\r\n}\r\n\r\n.infoExport {\r\n    font-weight: bold;\r\n}\r\n\r\n#formattedDate {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.shiftCell {\r\n    text-align: center;\r\n}\r\n\r\n#shiftLegend {\r\n    font-weight: normal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedule-renderer/schedule-renderer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"(!isEmployee)\" class=\"text-center\">utloggad</div>\n <div *ngIf=\"(isEmployee)\"> \n<div *ngIf=\"!(schedule)\" class=\"text-center\">inget schema upplagt</div>\n<div *ngIf=\"(schedule)\" class=\"schemaGenerator\" id=\"schemaGenerator2\">\n\t<br/>\n\t<div id=\"formattedDate\" ><p [innerHtml]=\"schedule.title\"></p></div>\n\t<br/>\n\t<table  class=\"table table-striped table-bordered\" >\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<td id=\"empName_td\"></td>    \n\t\t\t\t<td class=\"timeCellExport\" [ngClass]=\"{'currentHour' : currentIndex(y)}\" *ngFor=\"let hour of schedule.tableData; let y = index\" [innerHtml]=\"hour.hour\">\n\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let row of schedule.employees; let r = index\">\n\t\t\t\t<td class=\"empNameExport\"  \n\t\t\t\t\t[ngClass]=\"{'currentName' : currentEmployee(row.name)}\" \n\t\t\t\t\t[innerHtml]=\"row.name\" >\n\t\t\t\t</td>\n\t\t\t\t<td *ngFor=\"let hour of schedule.tableData; let h = index\"\n\t\t\t\t\t[ngClass] = \"{\n\t\t\t\t\t\t'currentEmployee' : currentEmployee(row.name),\n\t\t\t\t\t\t'currentIndex' : currentIndex(h) }\"\n\t\t\t\t\tclass=\"shiftCell\" \n\t\t\t\t\t[innerHtml]=\"hour.assignedShifts[r]\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<div *ngIf=\"(isGuide)\" class=\"pull-right text-right\" >\n\t\t<a class=\"btn btn-small btn-primary btn-change\" [routerLink]=\"['/schedulecreator/' + searchDate.year + '/' + searchDate.month + '/' + schedule.$key]\">Ändra</a>\n\t\t<br>\n\t\t<br>\n\t\t<div *ngIf=\"schedule.editedBy\" >\n\t\t\t<p class=\"text-left\">senast ändrad av:</p>\n\t\t\t<p [innerHtml]=\"schedule.editedBy\"></p>\n\t\t</div>\n\t</div>\n\t<br>\n\t<br>\n\t<div *ngIf=\"schedule.responsible\" class=\"infoExport\" >\n\t\tAnsvarig: {{schedule.responsible}}\n\t\t<div>\n\t\t\t<br>\n\t<div class=\"infoExport\" [innerHtml]=\"schedule.info\">\n\t</div>\n\t<br>\n    \n\t</div>\n\n<div class=\"col-md-2\">\n\t<div class=\"btn btn-sm btn-basic shiftHover\" (click)=\"toggleShifts()\">Visa Skift</div>\n\t\t<div *ngIf=\"showShifts\" >\n\t\t\t<table class=\"table table-condensed\" style=\"white-space: nowrap\">\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let shift of legendShifts; let i = index\">\n\t\t\t\t\t\t<td class=\"legend\"> {{shift.name}}</td>\n\t\t\t\t\t\t<td class=\"legend pull-right\">{{shift.description}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/schedule-renderer/schedule-renderer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_schedule_service__ = __webpack_require__("../../../../../src/app/services/current-schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleRendererComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleRendererComponent = (function () {
    function ScheduleRendererComponent(currentScheduleService, authService, shiftTypeService) {
        //this.weekday = 'wednesday';
        var _this = this;
        this.currentScheduleService = currentScheduleService;
        this.authService = authService;
        this.shiftTypeService = shiftTypeService;
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.firstName = user.firstName;
        this.isCurrentDay = false;
        this.showShifts = false;
        this.shiftTypeService.getShifts().subscribe(function (shifts) {
            _this.shifts = shifts.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
            _this.legendShifts = _this.shifts.slice(1);
        });
    }
    ScheduleRendererComponent.prototype.ngDoCheck = function () {
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.firstName = user.firstName;
        this.displayName = user.displayName;
        if (this.displayName !== this.initDisplayName) {
            this.initDisplayName = this.displayName;
            this.ngOnInit();
        }
    };
    ScheduleRendererComponent.prototype.toggleShifts = function () {
        this.showShifts = !this.showShifts;
    };
    ScheduleRendererComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isEmployee) {
            this.todaysDate = new Date();
            this.currentHour = this.todaysDate.getHours();
            if (this.currentScheduleService.getDayname(this.todaysDate.getDay()) === this.weekday) {
                this.isCurrentDay = true;
            }
            this.searchDate = this.currentScheduleService.getTodaysDate(this.weekday);
            var year = this.searchDate.year;
            var month = this.searchDate.month;
            this.currentScheduleService.getScheduleByWeekday(year, month).subscribe(function (schedules) {
                _this.schedules = schedules;
                schedules.map(function (schedule) {
                    if ((new Date(schedule.time)).getDate() == _this.searchDate.date) {
                        _this.schedule = schedule;
                        _this.schedule.responsible.length > 2 ? _this.responsible = true : _this.responsible = false;
                    }
                });
            });
        }
    };
    ScheduleRendererComponent.prototype.currentIndex = function (hour) {
        if (this.isCurrentDay) {
            if (this.schedule.tableData[hour].hour === this.currentHour) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ScheduleRendererComponent.prototype.currentEmployee = function (name) {
        if (name === this.firstName) {
            return true;
        }
        else {
            return false;
        }
    };
    ScheduleRendererComponent.prototype.currentColor = function (h) {
        if (h === this.currentHour) {
            return true;
        }
        else {
            return false;
        }
    };
    ScheduleRendererComponent.prototype.getEmployee = function () {
        var isEmployee = false;
        var employee = this.authService.getUser().isEmployee;
        employee === "true" ? isEmployee = true : isEmployee = false;
        return isEmployee;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ScheduleRendererComponent.prototype, "weekday", void 0);
    ScheduleRendererComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-renderer',
            template: __webpack_require__("../../../../../src/app/components/schedule-renderer/schedule-renderer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule-renderer/schedule-renderer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_current_schedule_service__["a" /* CurrentScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_current_schedule_service__["a" /* CurrentScheduleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__["a" /* ShiftTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__["a" /* ShiftTypeService */]) === "function" && _c || Object])
    ], ScheduleRendererComponent);
    return ScheduleRendererComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=schedule-renderer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-types/schedule-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(isAdmin)\" class=\"container\" id=\"schemaGenerator\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"form-group\" >\n          <label>Välj starttid</label>\n          <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=startTime (ngModelChange)=\"selectStartTime($event)\"   name=\"startTime\" required>\n            <option *ngFor=\"let openingHour of openingHours\" [ngValue]=\"openingHour\">{{openingHour}}</option>\n          </select>\n      </div>\n    </div>\n    <div class=\"col-md-3\" >\n      <div class=\"form-group\">\n        <label>Välj sluttid</label>\n          <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=endTime (ngModelChange)=\"selectEndTime($event)\"   name=\"startTime\" required>\n            <option *ngFor=\"let closingHour of closingHours\" [ngValue]=\"closingHour\">{{closingHour}}</option>\n          </select>\n      </div>\n    </div>\n  <div class=\"col-md-3\">\n    <div class=\"form-group \" >\n      <label>Mallens namn:</label>\n        <input class=\"form-control employeeName\" type=\"text\" [(ngModel)]=templateName name=\"templateName\" required>\n    </div>\n  </div>\n  </div>\n  <br>\n  <div *ngIf=\"(template)\" class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-4\">\n      <h2 *ngIf=\"(showRequiredShifts)\">Visar krav</h2>\n      <h2 *ngIf=\"(!showRequiredShifts)\">Visar tillagda skift</h2>\n    </div>\n     <div class=\"shiftButton pull-right\">\n      <button *ngIf=\"(showRequiredShifts)\" class=\"btn btn-sm btn-primary\" (click)=\"toggleVisibleShiftTypes()\" >Visa tillagda skift\n      </button>\n      <button *ngIf=\"(!showRequiredShifts)\" class=\"btn btn-sm btn-primary\" (click)=\"toggleVisibleShiftTypes()\" >Visa krav\n      </button>\n    </div>\n  </div>  \n   \n    <div class=\"row\">\n    <table class=\"table table-striped table-bordered\" style=\"white-space: nowrap\" [ngClass]=\"{'required': showRequiredShifts}\">\n      <thead>\n        <tr>\n          <td >Personal</td>\n          <!-- <td class=\"timeCell\" *ngFor=\"let hour of template.tableData.columns\">{{hour.hour}}</td> -->\n          <td class=\"timeCell\" *ngFor=\"let hour of template.tableData.columns\">{{hour.hour}}</td>\n          <td style=\"width: 0px\">Ta bort</td>\n        </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let row of template.tableData.rows; let i = index\">\n          <td>\n              <div class=\"form-group\" >\n                  <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=template.tableData.rows[i]   (ngModelChange)= \"addEmployee($event, i)\"   name=\"emp\" required>\n                      <option *ngFor=\"let employee of employeeList\" [ngValue]=\"employee.firstName\">{{employee.firstName}}</option>\n                  </select>\n              </div>\n          </td>\n          <td *ngFor=\"let cell of this.template.tableData.columns; let y = index\">\n            <div *ngIf=\"(showRequiredShifts)\" >\n              <select class=\"form-control\" type=\"text\" [(ngModel)]=this.template.tableData.columns[y].requiredShifts[i] name=\"cellRequired\">\n                <option *ngFor=\"let shift of shiftsFromDb\" [ngValue]=\"shift.name\">{{shift.name}}</option>\n              </select>\n            </div>\n            <div *ngIf=\"(!showRequiredShifts)\" >\n               <select class=\"form-control\" type=\"text\" [(ngModel)]=this.template.tableData.columns[y].assignedShifts[i] name=\"cellAssigned\">\n                <option *ngFor=\"let shift of shiftsFromDb\" [ngValue]=\"shift.name\">{{shift.name}}</option>\n              </select> \n            </div>\n          </td>\n          <td class=\"text-center\">\n                        <div class=\"btn btn-basic btn-sm\" (click)=\"deleteRow(row, i)\" ><span class=\"glyphicon glyphicon-trash\"></span></div>\n                    </td>\n        </tr> \n\n      </tbody>\n    </table>\n  <button class=\"btn btn-sm btn-primary\" (click)=\"addRow()\" >Lägg till rad\n              </button>\n  <button *ngIf=\"!hasId\" class=\"btn btn-sm btn-success\" (click)=\"saveTemplate()\" >Spara</button>\n  <button *ngIf=\"hasId\" class=\"btn btn-sm btn-alert\" (click)=\"updateTemplate(this.id)\" >Spara</button>\n    </div>\n            \n  </div>\n\n\n\n<br>\n<br>\n<br>\n    <div class=\"col-xs-6 col-sm-3\">\n        <h4>Schemamallar</h4>\n        <table class=\"table table-condensed table-striped\" style=\"white-space: nowrap\">\n          <thead>\n            <tr>\n              <th>\n                Namn\n              </th>\n              <th>\n                Uppdatera\n              </th>\n              <th class=\"text-center\">\n                Ta bort\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let template of templates; let i = index\">\n              <td>{{template.templateName}}</td>\n              <td class=\"text-center\">\n                <div class=\"btn btn-basic btn-sm\" (click)=\"viewTemplate(templates[i].$key)\"><span class=\"glyphicon glyphicon-pencil\"></span></div>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"btn btn-basic btn-sm\" (click)=\"deleteTemplate(templates[i].$key, templates[i].templateName)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/schedule-types/schedule-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_templates_service__ = __webpack_require__("../../../../../src/app/services/schedule-templates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleTypesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleTypesComponent = (function () {
    function ScheduleTypesComponent(shiftTypeService, scheduleTemplateService, employeesService, authService) {
        this.shiftTypeService = shiftTypeService;
        this.scheduleTemplateService = scheduleTemplateService;
        this.employeesService = employeesService;
        this.authService = authService;
        this.showRequiredShifts = true;
        this.openingHours = [6, 7, 8, 9, 10, 11, 12];
        this.closingHours = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.rows = [];
        this.columns = [];
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
        this.id = "";
    }
    ScheduleTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shiftTypeService.getShifts().subscribe(function (shiftTypes) {
            _this.shiftsFromDb = shiftTypes.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
        this.scheduleTemplateService.getTemplates().subscribe(function (templates) {
            _this.templates = templates.sort(function (a, b) { return (a.templateName > b.templateName) ? 1 : ((b.templateName > a.templateName) ? -1 : 0); });
        });
        this.employeesService.getEmployees().subscribe(function (employee) {
            _this.employeeList = employee.sort(function (a, b) { return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0); });
            _this.employeeList.unshift('');
        });
        /*   this.startTime = 12;
         this.endTime = 14;
         this.getOpenHours();  */
    };
    ScheduleTypesComponent.prototype.selectStartTime = function (event) {
        this.startTime = event;
        this.endTime ? this.getOpenHours() : null;
    };
    ScheduleTypesComponent.prototype.selectEndTime = function (event) {
        this.endTime = event;
        this.startTime ? this.getOpenHours() : null;
    };
    ScheduleTypesComponent.prototype.getOpenHours = function () {
        var _this = this;
        this.columns = [];
        this.openHours = [];
        this.rows = [];
        var dayLength = this.endTime - this.startTime;
        while (this.startTime < this.endTime) {
            this.openHours.push(this.startTime);
            this.startTime++;
        }
        this.openHours.push(this.endTime);
        this.openHours.forEach(function (h, index) {
            var column = { hour: h, requiredShifts: [], missingShifts: [], assignedShifts: [] };
            _this.columns.push(column);
        });
        this.tableData = { columns: this.columns, rows: this.rows };
        this.template = { templateName: '', tableData: this.tableData };
        this.addRow();
    };
    ScheduleTypesComponent.prototype.addRow = function () {
        var newRow = { employee: '' };
        this.template.tableData.rows.push(newRow);
        var rowIndex = this.template.tableData.rows.length - 1;
        this.template.tableData.columns.forEach(function (column) {
            column.assignedShifts[rowIndex] = '';
            column.requiredShifts[rowIndex] = '';
        });
    };
    ScheduleTypesComponent.prototype.deleteRow = function (r, index) {
        this.template.tableData.rows.splice(index, 1);
        this.template.tableData.columns.forEach(function (column, i) {
            column.assignedShifts.splice(index, 1);
            column.requiredShifts.splice(index, 1);
        });
    };
    ScheduleTypesComponent.prototype.addEmployee = function (event, index) {
        this.rows[index] = event;
    };
    ScheduleTypesComponent.prototype.saveTemplate = function () {
        if (!this.templateName) {
            alert('schemanamn saknas');
        }
        else {
            this.template.templateName = this.templateName;
            this.scheduleTemplateService.saveTemplate(this.template);
        }
    };
    ScheduleTypesComponent.prototype.deleteTemplate = function (id, name) {
        var response = confirm('Är du säker på att du vill radera schemamallen ' + '"' + name + '"' + '?');
        response ? this.scheduleTemplateService.deleteTemplate(id) : null;
        this.ngOnInit();
    };
    ScheduleTypesComponent.prototype.toggleVisibleShiftTypes = function () {
        this.showRequiredShifts ? this.showRequiredShifts = false : this.showRequiredShifts = true;
    };
    ScheduleTypesComponent.prototype.updateTemplate = function (id) {
        this.scheduleTemplateService.updateTemplate(id, this.template);
    };
    ScheduleTypesComponent.prototype.viewTemplate = function (id) {
        var _this = this;
        this.id = id;
        this.hasId = true;
        this.columns = [];
        this.rows = [];
        this.template = null;
        this.scheduleTemplateService.getTemplate(id).subscribe(function (template) { return _this.template = template; });
        this.templateName = this.template.templateName;
        if (this.template.tableData.columns[0].assignedShifts.indexOf('Ö') !== -1) {
            this.showRequiredShifts = false;
        }
        else {
            this.showRequiredShifts = true;
        }
    };
    ScheduleTypesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-schedule-types',
            template: __webpack_require__("../../../../../src/app/components/schedule-types/schedule-types.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shift_type_service__["a" /* ShiftTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shift_type_service__["a" /* ShiftTypeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_schedule_templates_service__["a" /* ScheduleTemplatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_schedule_templates_service__["a" /* ScheduleTemplatesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_employees_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_employees_service__["a" /* EmployeesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
    ], ScheduleTypesComponent);
    return ScheduleTypesComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=schedule-types.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEmployee\">\n\t<div *ngIf=\"schedule\" class=\"container\" id=\"schemaGenerator2\">\n\t\t<div>\n\t\t\t<br/>\n\t\t\t<div id=\"formattedDate\"><p>{{schedule.title}}</p></div>\n\t\t\t<br/>\n\t\t\t<table  class=\"table table-striped table-bordered\" >\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td id=\"empNameHead\"></td>    \n\t\t\t\t\t\t<td class=\"timeCellExport\" *ngFor=\"let hour of schedule.tableData; let y = index\">{{hour.hour}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr  *ngFor=\"let row of schedule.employees; let r = index\">\n\t\t\t\t\t\t<td class=\"empNameExport\">\n\t\t\t\t\t\t\t{{schedule.employees[r].name}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td  *ngFor=\"let hour of schedule.tableData; let h = index\" class=\"shiftCell\" style=\"text-transform: uppercase\">\n\t\t\t\t\t\t\t{{schedule.tableData[h].assignedShifts[r]}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<div style=\"margin-right: 0;\" class=\"pull-right\">\n\t\t\t\t<a class=\"btn btn-small btn-success \" [routerLink]=\"['/schedulecreator/'+ year + '/' + month + '/' + schedule.$key]\">Ändra</a>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div *ngIf=\"schedule.editedBy\" class=\"pull-right text-right\" >\n\t\t\t\t\t<p class=\"text-left\">senast ändrad av:</p>\n\t\t\t\t\t<p>{{schedule.editedBy}}</p>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<div class=\"infoExport\">\n\t\t\t\tAnsvarig: {{schedule.responsible}}\n\t\t\t<div>\n\t\t\t\t\t<br>\n\t\t\t<div class=\"infoExport\">\n\t\t\t\t{{schedule.info}}\n\t\t\t<div>\n\t\t\t<br>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduleComponent = (function () {
    function ScheduleComponent(firebaseService, router, route, authService) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.year = this.route.snapshot.params['year'];
        this.month = this.route.snapshot.params['month'];
        this.firebaseService.getScheduleDetails(this.id, this.year, this.month).subscribe(function (schedule) {
            _this.schedule = schedule;
        });
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__("../../../../../src/app/components/schedule/schedule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedule-creator/schedule-creator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedules/schedules.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background-color: #111111;\r\n}\r\n\r\n.monthButton {\r\n    margin-top: 80px;\r\n    font-size: 30px;\r\n\r\n}\r\n\r\n.edited {\r\n    color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedules/schedules.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(isAdmin)\" class=\"row\">\n  <div class=\"monthButton col-sm-1 col-md-offset-2\">\n      <button class=\"pull-right btn btn-primary\" (click)=\"showPreviousMonth()\"><span class=\"glyphicon glyphicon-triangle-left\"></span></button>  \n  </div>\n  <div class=\"col-sm-4 text-center\"> Gällande Scheman\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <td>\n            Schema\n          </td>\n          <td class=\"text-center\">\n            Sparad\n          </td>\n          <td class=\"text-center\">\n          </td>\n          <td class=\"text-center\">\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let schedule of editedSchedules; let h = index\">\n          <td>\n            <a [routerLink]=\"['/schedule/' + year + '/' + month + '/' + schedule.$key]\">{{schedule.title}}</a>\n          </td>\n          <td class=\"text-center\">\n            {{lastEdited[h]}}\n          </td>\n          <td class=\"text-center edited\">\n            <div *ngIf=\"(schedule.editedBy)\"><span class=\"glyphicon glyphicon-pencil\"></span></div>\n          </td>\n          <td class=\"text-center\">\n            <div class=\"btn btn-sm btn-basic\" (click)=\"deleteSchedule(schedule.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-sm-4 text-center\"> Originalscheman\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <td>\n            Schema\n          </td>\n          <td class=\"text-center\">\n            Sparad\n          </td>\n          <td class=\"text-center\">\n  \n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let originalSchedule of testSchedules; let h = index\">\n          <td>\n            <a [routerLink]=\"['/schedule/' + year + '/' + month + '/' + originalSchedule.$key]\">{{originalSchedule.title}}</a>\n          </td>\n          <td class=\"text-center\">\n            {{olastEdited[h]}}\n          </td>\n          <td class=\"text-center\">\n            <div class=\"btn btn-sm btn-basic\" (click)=\"deleteSchedule(originalSchedule.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"monthButton col-sm-1\">\n    <button class=\"btn btn-primary\" (click)=\"showNextMonth()\"><span class=\"glyphicon glyphicon-triangle-right\"></span></button>  \n  </div>\n      <!-- <div class=\"monthButton col-md-1 col-md-offset-2\">\n      <button class=\"pull-right btn btn-primary\" (click)=\"showPreviousMonth()\"><</button>  \n  </div>\n  <div class=\"col-md-6\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <td>\n            Schema\n          </td>\n          <td class=\"text-center\">\n            Sparad\n          </td>\n          <td class=\"text-center\">\n            Ta bort\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let schedule of schedules; let h = index\">\n          <td>\n            <a [routerLink]=\"['/schedule/' + year + '/' + month + '/' + schedule.$key]\">{{schedule.title}}</a>\n          </td>\n          <td class=\"text-center\">\n            {{lastEdited[h]}}\n          </td>\n          <td class=\"text-center\">\n            <div class=\"btn btn-sm btn-danger\" (click)=\"deleteSchedule(schedule.$key)\">x</div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n      <div class=\"monthButton col-md-1\">\n        <button class=\"btn btn-primary\" (click)=\"showNextMonth()\">></button>  \n    </div> -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/schedules/schedules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulesComponent = (function () {
    function SchedulesComponent(firebaseService, authService) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
    }
    SchedulesComponent.prototype.ngOnInit = function () {
        this.date = new Date;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.getSchedules(this.year, this.month);
        this.getOriginalSchedules(this.year, this.month);
    };
    SchedulesComponent.prototype.deleteSchedule = function (id) {
        var response = confirm('Är du säker på att du vill radera schemat?');
        response ? this.firebaseService.deleteSchedule(id, this.year, this.month) : null;
    };
    SchedulesComponent.prototype.showPreviousMonth = function () {
        if (this.month == 1) {
            this.year--;
            this.month = 12;
            this.getSchedules(this.year, this.month);
        }
        else {
            this.month--;
            this.getSchedules(this.year, this.month);
        }
    };
    SchedulesComponent.prototype.showNextMonth = function () {
        if (this.month == 12) {
            this.year++;
            this.month = 1;
            this.getSchedules(this.year, this.month);
        }
        this.month++;
        this.getSchedules(this.year, this.month);
    };
    SchedulesComponent.prototype.getSchedules = function (year, month) {
        var _this = this;
        this.firebaseService.getDatedSchedules(year, month).subscribe(function (schedules) {
            _this.eschedules = [];
            _this.testSchedules = [];
            var tempTitle = '';
            _this.schedules = schedules.sort(function (a, b) { return a.time - b.time; });
            _this.schedules.forEach(function (schedule) {
                if (tempTitle === '') {
                    tempTitle = schedule.title;
                    _this.eschedules.push([schedule]);
                }
                else {
                    if (schedule.title === tempTitle) {
                        _this.eschedules[_this.eschedules.length - 1].push(schedule);
                    }
                    else {
                        tempTitle = schedule.title;
                        _this.eschedules.push([schedule]);
                    }
                }
            });
            _this.eschedules.forEach(function (sameDateArray) {
                sameDateArray = sameDateArray.sort(function (a, b) {
                    var x = (new Date(a.createdAt).getTime());
                    var y = (new Date(b.createdAt).getTime());
                    return x - y;
                });
            });
            _this.editedSchedules = [];
            _this.eschedules.forEach(function (eArray) {
                _this.editedSchedules.push(eArray[eArray.length - 1]);
                _this.testSchedules.push(eArray[0]);
            });
            //this.lastEdited = this.editedSchedules.map( date => {
            _this.lastEdited = _this.editedSchedules.map(function (date) {
                return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
            });
            _this.olastEdited = _this.testSchedules.map(function (date) {
                return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
            });
        });
        /*this.firebaseService.getEditedSchedules(year, month).subscribe(schedules => {
          this.editedSchedules = schedules.sort( (a, b) => a.time - b.time );
          this.lastEdited = this.editedSchedules.map( date => {
            return (' nytt ' + date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
          });

        });*/
    };
    SchedulesComponent.prototype.getOriginalSchedules = function (year, month) {
        var _this = this;
        this.firebaseService.getDatedSchedules(year, month).subscribe(function (schedules) {
            _this.originalSchedules = schedules.sort(function (a, b) { return a.time - b.time; });
            _this.oSchedules = [];
            var title = '';
            var date = new Date();
            _this.originalSchedules.forEach(function (schedule) {
                //jämför alla scheman med samma title, använd .createdAt för att bara ta de äldsta med samma title
                if (title === '') {
                    title = schedule.title;
                    _this.oSchedules.push(schedule);
                    _this.date = schedule.date;
                }
                else {
                    if (title === schedule.title) {
                        var currentScheduleDate = schedule.date;
                        if (currentScheduleDate < date) {
                            date = schedule.date;
                            if (_this.oSchedules[_this.oSchedules.lenght - 1].title !== schedule.title) {
                                _this.oSchedules.pop();
                                _this.oSchedules.push(schedule);
                            }
                        }
                    }
                    else {
                        title = schedule.title;
                        _this.oSchedules.push(schedule);
                        _this.date = schedule.date;
                    }
                }
            });
            /* this.olastEdited = this.oSchedules.map( date => {
              return (date.createdAt.substring(5, 12) + date.createdAt.substring(17, 22));
            }); */
        });
    };
    SchedulesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedules',
            template: __webpack_require__("../../../../../src/app/components/schedules/schedules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/schedules/schedules.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], SchedulesComponent);
    return SchedulesComponent;
    var _a, _b;
}());

//# sourceMappingURL=schedules.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shift-types/shift-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(isAdmin)\" class=\"row\" id=\"schemaGenerator\">\n    <!--<form class=\"col-md-2 col-md-offset-5\" (submit)=\"addEmployee()\">-->\n      <div class=\"col-md-2 col-md-offset-1\">\n        <h4>Skifttyper</h4>\n        <table class=\"table table-condensed table-striped\" style=\"white-space: nowrap\">\n          <thead>\n            <tr>\n              <th>\n                Namn\n              </th>\n              <th>\n                Beskrivning\n              </th>\n              <th>\n                Kräver Visningsklar\n              </th>\n              <th>\n                Uppdatera\n              </th>\n              <th class=\"text-center\">\n                Ta bort\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let shift of shifts; let i = index\">\n              <td>{{shift.name}}</td>\n              <td>{{shift.description}}</td>\n              <td class=\"text-center\" [innerHtml]=\"getBool(shift.requiresTourReady)\"></td>\n              <td class=\"text-center\">\n                <div class=\"btn btn-basic btn-sm\" (click)=\"editShift(shift.name, shift.description, shift.requiresTourReady, shift.$key)\"><span class=\"glyphicon glyphicon-pencil\"></span></div>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"btn btn-basic btn-sm\" (click)=\"deleteShift(shift.$key)\"><span class=\"glyphicon glyphicon-trash\"></span></div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <form class=\"col-md-2 col-md-offset-6\" (submit)=\"addShift()\">\n        <h4>Lägg till skift</h4>\n        <div class=\"form-group\">\n              <label>Namn (förkortning)</label>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n          </div>\n          <div class=\"form-group\">\n              <label>Beskrivning</label>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n          </div>\n          <div class=\"form-group\" >\n              <label>Kräver Visningsklar</label>\n              <select class=\"form-control employeeName\" type=\"text\" [(ngModel)]=requiresTourReady (ngModelChange)=\"selectRequiresTourReady($event)\" name=\"tableType\" required>\n                  <option value=\"true\">Ja</option>\n                  <option value=\"false\">Nej</option>\n              </select>\n          </div>\n          <input type=\"submit\" value=\"Spara\" class=\"btn btn-success\">\n          <div class=\"btn btn-primary\" (click)=\"clearShift()\">Rensa</div>\n          <br>\n          <br>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shift-types/shift-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__ = __webpack_require__("../../../../../src/app/services/shift-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftTypesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__["a" /* ShiftTypeService */];
var ShiftTypesComponent = (function () {
    function ShiftTypesComponent(shiftTypeService, authService) {
        this.shiftTypeService = shiftTypeService;
        this.authService = authService;
        var user = this.authService.getUser();
        user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
        user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
        user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
        this.displayName = user.displayName;
        this.id = '';
    }
    ShiftTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shiftTypeService.getShifts().subscribe(function (shifts) {
            _this.shifts = shifts.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
    };
    ShiftTypesComponent.prototype.getShifts = function () {
        var _this = this;
        this.shiftTypeService.getShifts().subscribe(function (shifts) {
            _this.shifts = shifts.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
    };
    ShiftTypesComponent.prototype.addShift = function () {
        var shift = {
            name: this.name,
            description: this.description,
            requiresTourReady: this.requiresTourReady
        };
        if (this.id !== '') {
            this.shiftTypeService.updateShift(this.id, shift);
        }
        else {
            this.shiftTypeService.addShift(shift);
        }
    };
    ShiftTypesComponent.prototype.deleteShift = function (id) {
        this.shiftTypeService.deleteShift(id);
        this.clearShift();
    };
    ShiftTypesComponent.prototype.clearShift = function () {
        this.id = '';
        this.name = null;
        this.requiresTourReady = null;
        this.description = null;
    };
    ShiftTypesComponent.prototype.editShift = function (name, description, requiresTourReady, id) {
        this.name = name,
            this.description = description,
            this.requiresTourReady = requiresTourReady,
            this.id = id;
    };
    ShiftTypesComponent.prototype.selectRequiresTourReady = function (bool) {
        this.requiresTourReady = bool;
    };
    ShiftTypesComponent.prototype.getBool = function (text) {
        if (text === "true") {
            return "ja";
        }
        else {
            return "nej";
        }
    };
    ShiftTypesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-shift-types',
            template: __webpack_require__("../../../../../src/app/components/shift-types/shift-types.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__["a" /* ShiftTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shift_type_service__["a" /* ShiftTypeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], ShiftTypesComponent);
    return ShiftTypesComponent;
    var _a, _b;
}());

//# sourceMappingURL=shift-types.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/friday/friday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FridayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FridayComponent = (function () {
    function FridayComponent() {
        this.weekday = 'friday';
    }
    FridayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FridayComponent);
    return FridayComponent;
}());

//# sourceMappingURL=friday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/monday/monday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MondayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MondayComponent = (function () {
    function MondayComponent() {
        this.weekday = 'monday';
    }
    MondayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-monday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MondayComponent);
    return MondayComponent;
}());

//# sourceMappingURL=monday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/saturday/saturday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaturdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaturdayComponent = (function () {
    function SaturdayComponent() {
        this.weekday = 'saturday';
    }
    SaturdayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saturday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaturdayComponent);
    return SaturdayComponent;
}());

//# sourceMappingURL=saturday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/sunday/sunday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SundayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SundayComponent = (function () {
    function SundayComponent() {
        this.weekday = 'sunday';
    }
    SundayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sunday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SundayComponent);
    return SundayComponent;
}());

//# sourceMappingURL=sunday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/thursday/thursday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThursdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThursdayComponent = (function () {
    function ThursdayComponent() {
        this.weekday = 'thursday';
    }
    ThursdayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-thursday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThursdayComponent);
    return ThursdayComponent;
}());

//# sourceMappingURL=thursday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/tuesday/tuesday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuesdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TuesdayComponent = (function () {
    function TuesdayComponent() {
        this.weekday = 'tuesday';
    }
    TuesdayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tuesday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TuesdayComponent);
    return TuesdayComponent;
}());

//# sourceMappingURL=tuesday.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/weekDays/wednesday/wednesday.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@media(max-width: 570px) {\r\n    #schemaGenerator2 {\r\n        font-size: 12px;\r\n    }\r\n    #formattedDate {\r\n        font-size: 14px !important;\r\n    }\r\n    .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\r\n        padding: 6px !important;\r\n    }\r\n    .btn-change {\r\n        font-size: 10px;\r\n    }\r\n    .table {\r\n         margin-left: -14px;\r\n    }\r\n}\r\n\r\n.currentHour {\r\n    /*  background-color: #f0f2f4; */\r\n     background-color: #99c9ff;\r\n}\r\n\r\n.nonCurrentHour {\r\n\r\n    /* background-color: lightblue  */\r\n}\r\n\r\n.currentIndex {\r\n\r\n    background-color: #e5f1ff;\r\n\r\n}\r\n\r\n.currentEmployee {\r\n\r\n    font-weight: bold;\r\n}\r\n\r\n.currentName {\r\n    font-size: large;\r\n\r\n}\r\n\r\n.table {\r\n    text-align: center;\r\n}\r\n\r\n.employeeName {\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n\r\n.hour {\r\n    font-weight: bold;\r\n}\r\n\r\n.timeCell {\r\n    font-weight: bold;\r\n}\r\n\r\n.timeCellExport {\r\n    font-weight: bold;\r\n    width: 30px;\r\n    vertical-align: bottom !important; \r\n}\r\n\r\n\r\n\r\n.empNameExport {\r\n    width: 70px;\r\n    text-align: right;\r\n    font-weight: bold;\r\n}\r\n#empName_td {\r\n    width: 70px;\r\n}\r\n\r\n#title {\r\n    width: 300px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n}\r\n\r\n.form-control {\r\n    width: 70px;\r\n    padding: 5px 5px;\r\n    margin-right: 0;\r\n}\r\n\r\n.employeeName {\r\n     width: 140px;\r\n    padding: 5px 5px 5px;\r\n    margin-right: 0;\r\n}\r\n.form-group {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.info {\r\n    width: 700px;\r\n    font-weight: bold;\r\n}\r\n\r\n.infoExport {\r\n    font-weight: bold;\r\n}\r\n\r\n#formattedDate {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.shiftCell {\r\n    text-align: center;\r\n}\r\n\r\n#shiftLegend {\r\n    font-weight: normal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/weekDays/wednesday/wednesday.component.html":
/***/ (function(module, exports) {

module.exports = "<app-renderer [weekday]=\"weekday\"></app-renderer>"

/***/ }),

/***/ "../../../../../src/app/components/weekDays/wednesday/wednesday.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WednesdayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WednesdayComponent = (function () {
    function WednesdayComponent() {
        this.weekday = 'wednesday';
    }
    WednesdayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wednesday',
            template: __webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weekDays/wednesday/wednesday.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WednesdayComponent);
    return WednesdayComponent;
}());

//# sourceMappingURL=wednesday.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employees_service__ = __webpack_require__("../../../../../src/app/services/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(af, employeesService, router) {
        var _this = this;
        this.af = af;
        this.employeesService = employeesService;
        this.router = router;
        this.employeesService.getEmployees().subscribe(function (employees) {
            _this.employees = employees;
        }).unsubscribe();
    }
    AuthenticationService.prototype.login = function () {
        var _this = this;
        console.log('logging in');
        var user = { email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: '' };
        this.af.auth.login().then(function (auth) {
            _this.employees.forEach(function (emp) {
                if (emp.emails.indexOf(auth.auth.email) !== -1) {
                    user.displayName = auth.auth.displayName;
                    user.email = auth.auth.email;
                    user.firstName = emp.firstName;
                    user.isAdmin = emp.admin;
                    user.isGuide = emp.tourReady;
                    user.isEmployee = "true";
                    user.uid = emp.$key;
                    localStorage.setItem('user', JSON.stringify(user));
                }
            });
        });
    };
    AuthenticationService.prototype.login2 = function () {
        var _this = this;
        /*     this.af.auth.login().then(() => {
              //this.authenticateUser();
               
               console.log('logging in');
               console.log(this.user);
               
               
              this.router.navigate(['/']);
               window.location.reload();
             }); */
        var user = { email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: '' };
        this.af.auth.login().then(function (auth) {
            _this.employeesService.getEmployees().subscribe(function (employees) {
                //this.employees = employees;
                employees.forEach(function (emp) {
                    if (emp.email === auth.auth.email) {
                        user.displayName = auth.auth.displayName;
                        user.email = auth.auth.email;
                        user.firstName = emp.firstName;
                        user.isAdmin = emp.admin;
                        user.isGuide = emp.tourReady;
                        user.isEmployee = "true";
                        user.uid = emp.$key;
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                    return _this.user;
                });
            });
            /*  this.employees.forEach(emp => {
               console.log('looping emps');
              
               if(emp.email === auth.auth.email) {
                 console.log('email found');
               
               user.displayName = auth.auth.displayName;
               user.email = auth.auth.email;
               user.firstName = emp.firstName;
               user.isAdmin = emp.admin;
               user.isGuide = emp.tourReady;
               user.isEmployee = "true";
               user.uid = emp.$key;
   
   
               localStorage.setItem('user', JSON.stringify(user));
       
                 this.router.navigate(['/']);
                window.location.reload();
   
                 return user;
               
               }
             })
          })*/
        });
        // try map
    };
    AuthenticationService.prototype.logOut = function () {
        var _this = this;
        this.af.auth.logout().then(function () {
            _this.clearUser();
            _this.router.navigate(['/']);
            window.location.reload();
        });
    };
    AuthenticationService.prototype.clearUser = function () {
        this.user = { email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: '' };
        localStorage.setItem('user', JSON.stringify(this.user));
    };
    AuthenticationService.prototype.getUser = function () {
        if (JSON.parse(localStorage.getItem('user')) == null) {
            this.user = { email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: '' };
            localStorage.setItem('user', JSON.stringify(this.user));
            return JSON.parse(localStorage.getItem('user'));
        }
        else {
            return JSON.parse(localStorage.getItem('user'));
        }
    };
    AuthenticationService.prototype.getUserObject = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            _this.employeesService.getEmployees().subscribe(function (employees) {
                employees.forEach(function (emp) {
                    if (emp.email === auth.google.email) {
                        _this.userObject = emp;
                    }
                });
            });
        });
        return this.userObject;
    };
    AuthenticationService.prototype.authUser = function () {
        var _this = this;
        var user = { email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: '' };
        this.af.auth.login().then(function () {
            var x = _this.employeesService.getEmployees().subscribe(function (employees) {
                _this.employees = employees;
                _this.af.auth.subscribe(function (auth) {
                    _this.employees.forEach(function (emp) {
                        if (emp.emails.indexOf(auth.auth.email) !== -1) {
                            user.displayName = auth.google.displayName;
                            user.email = auth.google.email;
                            user.firstName = emp.firstName;
                            user.isAdmin = emp.admin;
                            user.isGuide = emp.tourReady;
                            user.isEmployee = "true";
                            user.uid = emp.$key;
                            localStorage.setItem('user', JSON.stringify(user));
                            _this.userObject = emp;
                        }
                    });
                });
            });
        });
        return user;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__employees_service__["a" /* EmployeesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__employees_service__["a" /* EmployeesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b, _c;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/current-schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentScheduleService = (function () {
    function CurrentScheduleService(af) {
        this.af = af;
    }
    CurrentScheduleService.prototype.getDayname = function (dayNumber) {
        var days = new Array(7);
        days[0] = 'sunday';
        days[1] = 'monday';
        days[2] = 'tuesday';
        days[3] = 'wednesday';
        days[4] = 'thursday';
        days[5] = 'friday';
        days[6] = 'saturday';
        return days[dayNumber];
    };
    CurrentScheduleService.prototype.getTodaysDate = function (weekDay) {
        //TODO: try out moment.js for date logic
        var date = new Date();
        var todaysDay = this.getDayname(date.getDay());
        while (weekDay !== todaysDay) {
            date.setDate(date.getDate() + 1);
            //todaysDay = days[date.getDay()]
            todaysDay = this.getDayname(date.getDay());
        }
        var month = date.getMonth() + 1;
        var wantedDate = date.getDate();
        var year = date.getFullYear();
        var searchDate = { year: year, date: wantedDate, month: month, dayName: todaysDay, };
        return (searchDate);
    };
    CurrentScheduleService.prototype.getScheduleByWeekday = function (year, month) {
        this.schedules = this.af.database.list('/schedulesSorted/' +
            year + '/' +
            month + '/');
        return this.schedules;
    };
    CurrentScheduleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
    ], CurrentScheduleService);
    return CurrentScheduleService;
    var _a;
}());

//# sourceMappingURL=current-schedule.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/employees.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeesService = (function () {
    function EmployeesService(af) {
        this.af = af;
        this.employees = this.af.database.list('/employees/');
    }
    EmployeesService.prototype.saveEmployee = function (newEmployee) {
        this.employees.push(newEmployee);
    };
    EmployeesService.prototype.getEmployees = function () {
        return this.employees;
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.af.database.object('/employees/' + id);
    };
    EmployeesService.prototype.getEmployeeByEmail = function (email) {
        var user = {};
        this.employees.subscribe(function (employees) {
            employees.forEach(function (employee) {
                if (employee.email === email) {
                    user = employee;
                }
            });
        });
        return user;
    };
    EmployeesService.prototype.updateEmployee = function (id, employee) {
        //this.employees = this.af.database.list('/employees/') as FirebaseListObservable<Employee[]>;
        return this.employees.update(id, employee);
    };
    EmployeesService.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employee = this.af.database.object('/employees/' + id);
        this.employee.subscribe(function (selectedEmployee) {
            _this.selectedEmployee = selectedEmployee;
        });
        var response = confirm('Är du säker på att du vill radera ' +
            this.selectedEmployee.firstName + ' ' +
            this.selectedEmployee.lastName + '?');
        response ? this.employee.remove() : null;
    };
    EmployeesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
    ], EmployeesService);
    return EmployeesService;
    var _a;
}());

//# sourceMappingURL=employees.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
    }
    FirebaseService.prototype.getDatedSchedules = function (year, month) {
        this.schedules = this.af.database.list('schedulesSorted/' + year + '/' + month);
        return this.schedules;
    };
    FirebaseService.prototype.getEditedSchedules = function (year, month) {
        this.schedules = this.af.database.list('schedulesSorted/' + year + '/' + month);
        return this.schedules;
    };
    FirebaseService.prototype.getScheduleDetails = function (id, year, month) {
        this.schedule = this.af.database.object('/schedulesSorted/' + year + '/' + month + '/' + id);
        return this.schedule;
    };
    FirebaseService.prototype.deleteSchedule = function (id, year, month) {
        this.schedule = this.af.database.object('/schedulesSorted/' + year + '/' + month + '/' + id);
        this.schedule.remove();
    };
    FirebaseService.prototype.saveSchedule = function (scheduleToSave) {
        /* const year = scheduleToSave.date.getFullYear();
        const month = scheduleToSave.date.getMonth() + 1; */
        var date = new Date(scheduleToSave.time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month);
        this.schedules.push(scheduleToSave);
    };
    FirebaseService.prototype.updateSchedule = function (scheduleToUpdate, year, month, id) {
        if (scheduleToUpdate.editedBy === null) {
            this.saveSchedule(scheduleToUpdate);
        }
        else if (scheduleToUpdate.editedBy.length > 2) {
            this.schedules = this.af.database.list('/schedulesSorted/' + year + '/' + month);
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
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/schedule-templates.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleTemplatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleTemplatesService = (function () {
    function ScheduleTemplatesService(af) {
        this.af = af;
    }
    ScheduleTemplatesService.prototype.saveTemplate = function (template) {
        this.scheduleTemplates = this.af.database.list('/scheduleTemplates/');
        this.scheduleTemplates.push(template);
    };
    ScheduleTemplatesService.prototype.updateTemplate = function (id, template) {
        this.scheduleTemplates = this.af.database.list('/scheduleTemplates/');
        return this.scheduleTemplates.update(id, template);
    };
    ScheduleTemplatesService.prototype.getTemplates = function () {
        this.scheduleTemplates = this.af.database.list('/scheduleTemplates/');
        return this.scheduleTemplates;
    };
    ScheduleTemplatesService.prototype.getTemplate = function (id) {
        this.scheduleTemplate = this.af.database.object('/scheduleTemplates/' + id);
        return this.scheduleTemplate;
    };
    ScheduleTemplatesService.prototype.deleteTemplate = function (id) {
        this.scheduleTemplate = this.af.database.object('/scheduleTemplates/' + id);
        this.scheduleTemplate.remove();
    };
    ScheduleTemplatesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
    ], ScheduleTemplatesService);
    return ScheduleTemplatesService;
    var _a;
}());

//# sourceMappingURL=schedule-templates.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shift-type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShiftTypeService = (function () {
    function ShiftTypeService(af, flashMessage) {
        this.af = af;
        this.flashMessage = flashMessage;
    }
    ShiftTypeService.prototype.addShift = function (newShift) {
        this.shifts = this.af.database.list('/shifts/');
        this.shifts.push(newShift);
    };
    ShiftTypeService.prototype.getShifts = function () {
        this.shifts = this.af.database.list('/shifts/');
        return this.shifts;
    };
    ShiftTypeService.prototype.updateShift = function (id, shift) {
        this.shifts = this.af.database.list('/shifts/');
        return this.shifts.update(id, shift);
    };
    ShiftTypeService.prototype.getShift = function (id) {
        this.shift = this.af.database.object('/shifts/' + id);
        return this.shift;
    };
    ShiftTypeService.prototype.deleteShift = function (id) {
        var response = confirm('Är du säker på att du vill radera skiftet?');
        if (response) {
            this.shift = this.af.database.object('/shifts/' + id);
            this.shift.remove();
        }
    };
    ShiftTypeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], ShiftTypeService);
    return ShiftTypeService;
    var _a, _b;
}());

//# sourceMappingURL=shift-type.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map