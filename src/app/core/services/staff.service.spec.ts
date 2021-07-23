import { TestBed } from '@angular/core/testing';

import { StaffService } from './staff.service';

describe('UserService', () => {
  let service: StaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
