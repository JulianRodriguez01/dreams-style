import { TestBed } from '@angular/core/testing';

import { PantPocketService } from './pant-pocket.service';

describe('PantPocketService', () => {
  let service: PantPocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantPocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
