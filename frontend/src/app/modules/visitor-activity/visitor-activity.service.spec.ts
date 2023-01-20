import { TestBed } from '@angular/core/testing';

import { VisitorActivityService } from './visitor-activity.service';

describe('VisitorActivityService', () => {
  let service: VisitorActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
