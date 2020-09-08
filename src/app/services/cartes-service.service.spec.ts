import { TestBed } from '@angular/core/testing';

import { CartesServiceService } from './cartes-service.service';

describe('CartesServiceService', () => {
  let service: CartesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
