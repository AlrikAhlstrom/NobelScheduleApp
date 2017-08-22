import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class ScheduleTemplatesService {

  scheduleTemplates: FirebaseListObservable<any[]>;
  scheduleTemplate: any;

  constructor(private af: AngularFire) { }

  saveTemplate(template) {
    
    this.scheduleTemplates = this.af.database.list('/scheduleTemplates/') as FirebaseListObservable<ScheduleTemplate[]>;
    this.scheduleTemplates.push(template);
  }

  updateTemplate(id, template) {
    
    this.scheduleTemplates = this.af.database.list('/scheduleTemplates/') as FirebaseListObservable<ScheduleTemplate[]>;
    return this.scheduleTemplates.update(id, template);
  }

  getTemplates() {
    this.scheduleTemplates = this.af.database.list('/scheduleTemplates/') as FirebaseListObservable<Template[]>;
    return this.scheduleTemplates;
  }

  getTemplate(id) {
    this.scheduleTemplate = this.af.database.object('/scheduleTemplates/' + id ) as FirebaseObjectObservable<ScheduleTemplate>;
    
    return this.scheduleTemplate;
  }

  deleteTemplate(id) {
    this.scheduleTemplate = this.af.database.object('/scheduleTemplates/' + id ) as FirebaseObjectObservable<ScheduleTemplate>;
    this.scheduleTemplate.remove();
  }
}

interface ScheduleTemplate {
  $key?: string;
  templateName?: string;
  tableData?: ScheduleTemplateColumn[];
}

interface ScheduleTemplateColumn {
  hour: number;
  requiredShifts: string[];
  missingShifts: string[];
  assignedShifts: string[];
}

interface Template {
  $key?: string;
  templateName?: string;
  tableData?: TableData;
}

interface TableData {
  columns: Column[];
  rows: Row[];
}

interface Row {
  index: number;
  employee: string;
}

interface Column {
    hour: number;
    requiredShifts: string[];
    missingShifts: string[];
    assignedShifts: string[];
}
