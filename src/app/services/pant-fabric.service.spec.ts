import { TestBed } from '@angular/core/testing';

import { PantFabricService } from './pant-fabric.service';

describe('PantFabricService', () => {
  let service: PantFabricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantFabricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
