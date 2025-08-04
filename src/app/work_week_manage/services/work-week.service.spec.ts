import { TestBed } from '@angular/core/testing';

import { WorkWeekService } from './work-week.service';

describe('WorkWeekService', () => {
  let service: WorkWeekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkWeekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
