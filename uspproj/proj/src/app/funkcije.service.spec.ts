import { TestBed } from '@angular/core/testing';

import { FunkcijeService } from './funkcije.service';

describe('FunkcijeService', () => {
  let service: FunkcijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunkcijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
