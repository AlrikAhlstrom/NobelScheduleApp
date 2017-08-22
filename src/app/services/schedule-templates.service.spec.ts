import { TestBed, inject } from '@angular/core/testing';

import { ScheduleTemplatesService } from './schedule-templates.service';

describe('ScheduleTemplatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleTemplatesService]
    });
  });

  it('should ...', inject([ScheduleTemplatesService], (service: ScheduleTemplatesService) => {
    expect(service).toBeTruthy();
  }));
});
