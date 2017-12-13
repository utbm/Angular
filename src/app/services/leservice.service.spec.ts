import { TestBed, inject } from '@angular/core/testing';

import { LeserviceService } from './leservice.service';

describe('LeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeserviceService]
    });
  });

  it('should be created', inject([LeserviceService], (service: LeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
