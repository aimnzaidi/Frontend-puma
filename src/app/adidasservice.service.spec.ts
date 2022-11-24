import { TestBed } from '@angular/core/testing';

import { adidasserviceService } from './adidasservice.service';

describe('adidasserviceService', () => {
  let service: adidasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adidasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
