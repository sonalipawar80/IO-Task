import { TestBed } from '@angular/core/testing';

import { CricketerservService } from './cricketerserv.service';

describe('CricketerservService', () => {
  let service: CricketerservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricketerservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
