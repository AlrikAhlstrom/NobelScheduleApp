import { ScheduleTemplatesService } from './services/schedule-templates.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { EmployeesService } from './services/employees.service';
import { ShiftTypeService } from './services/shift-type.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleCreatorComponent } from './components/schedule-creator/schedule-creator.component';
import { WednesdayComponent } from './components/weekDays/wednesday/wednesday.component';
import { ThursdayComponent } from './components/weekDays/thursday/thursday.component';
import { FridayComponent } from './components/weekDays/friday/friday.component';
import { SaturdayComponent } from './components/weekDays/saturday/saturday.component';
import { SundayComponent } from './components/weekDays/sunday/sunday.component';
import { TuesdayComponent } from './components/weekDays/tuesday/tuesday.component';
import { EmployeesComponent, EmailForm } from './components/employees/employees.component';
import { ShiftTypesComponent } from './components/shift-types/shift-types.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleEditorComponent } from './components/schedule-editor/schedule-editor.component';
import { CurrentScheduleService } from './services/current-schedule.service';
import { ScheduleTypesComponent } from './components/schedule-types/schedule-types.component';
import { MondayComponent } from './components/weekDays/monday/monday.component';
import { ScheduleRendererComponent } from './components/schedule-renderer/schedule-renderer.component';



// TODO: set up firebase database rules to only allow writes from nobel museum employees.

export const firebaseConfig = {
 // removed apiKey and messenger messagingSenderId to restrict access to database.
// go to nobelschedule.firebaseapp.com to view live version. Log in with gmail adress or other email hosted by google.
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'schedule/:year/:month/:id', component: ScheduleComponent},
  {path: 'schedule/:id', component: ScheduleComponent},
  {path: 'schedules', component: SchedulesComponent},
  {path: 'schedules/:id', component: SchedulesComponent},
  {path: 'schedulecreator', component: ScheduleCreatorComponent},
  {path: 'schedulecreator/:year/:month/:id', component: ScheduleCreatorComponent},
  {path: 'schedulecreator/:id', component: ScheduleCreatorComponent},
  {path: 'scheduleEditor/:year/:month/:id', component: ScheduleEditorComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/:id', component: EmployeesComponent},
  {path: 'monday', component: MondayComponent},
  {path: 'tuesday', component: TuesdayComponent},
  {path: 'wednesday', component: WednesdayComponent},
  {path: 'thursday', component: ThursdayComponent},
  {path: 'friday', component: FridayComponent},
  {path: 'saturday', component: SaturdayComponent},
  {path: 'sunday', component: SundayComponent},
  {path: 'shiftTypes', component: ShiftTypesComponent},
  {path: 'shiftTypes/:id', component: ShiftTypesComponent},
  {path: 'scheduleTypes', component: ScheduleTypesComponent}
];

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleComponent,
    ScheduleCreatorComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,
    EmployeesComponent,
    ShiftTypesComponent,
    SchedulesComponent,
    ScheduleEditorComponent,
    ScheduleTypesComponent,
    ScheduleRendererComponent,
    EmailForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  providers: [FirebaseService, EmployeesService, ShiftTypeService, CurrentScheduleService, AuthenticationService, ScheduleTemplatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
