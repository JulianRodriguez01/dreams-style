import { TestBed } from '@angular/core/testing';

import { CustomPantListService } from './custom-pant-list.service';

describe('CustomPantListService', () => {
  let service: CustomPantListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPantListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
