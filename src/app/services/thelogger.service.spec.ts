import { TestBed, inject } from '@angular/core/testing';

import { TheloggerService } from './thelogger.service';

describe('TheloggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheloggerService]
    });
  });

  it('should be created', inject([TheloggerService], (service: TheloggerService) => {
    expect(service).toBeTruthy();
  }));
});
