import { TestBed } from '@angular/core/testing';

import { CustomPantService } from './custom-pant.service';

describe('CustomPantService', () => {
  let service: CustomPantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
