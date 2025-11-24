import { TestBed } from '@angular/core/testing';

import { ServTaskService } from './serv-task.service';

describe('ServTaskService', () => {
  let service: ServTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
