import { TestBed } from '@angular/core/testing';

import { GallaryservService } from './gallaryserv.service';

describe('GallaryservService', () => {
  let service: GallaryservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallaryservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
