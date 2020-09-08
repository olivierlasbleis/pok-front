import { TestBed } from '@angular/core/testing';

import { PrevisionsServiceService } from './previsions-service.service';

describe('PrevisionsServiceService', () => {
  let service: PrevisionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
