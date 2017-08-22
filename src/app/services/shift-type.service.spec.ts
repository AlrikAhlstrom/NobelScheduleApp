import { TestBed, inject } from '@angular/core/testing';

import { ShiftTypeService } from './shift-type.service';

describe('ShiftTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftTypeService]
    });
  });

  it('should ...', inject([ShiftTypeService], (service: ShiftTypeService) => {
    expect(service).toBeTruthy();
  }));
});
