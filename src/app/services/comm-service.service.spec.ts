import { TestBed, inject } from '@angular/core/testing';

import { CommServiceService } from './comm-service.service';

describe('CommServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommServiceService]
    });
  });

  it('should be created', inject([CommServiceService], (service: CommServiceService) => {
    expect(service).toBeTruthy();
  }));
});
