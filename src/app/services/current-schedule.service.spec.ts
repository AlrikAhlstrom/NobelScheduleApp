import { TestBed, inject } from '@angular/core/testing';

import { CurrentScheduleService } from './current-schedule.service';

describe('CurrentScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentScheduleService]
    });
  });

  it('should ...', inject([CurrentScheduleService], (service: CurrentScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
