import { TestBed } from '@angular/core/testing';

import { PantStikerService } from './pant-stiker.service';

describe('PantStikerService', () => {
  let service: PantStikerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantStikerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
