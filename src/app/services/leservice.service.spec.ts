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

  it('should plus', inject([LeserviceService], (service: LeserviceService) => {
    expect(service.plus(30, 50) == 80);
  }));
});
