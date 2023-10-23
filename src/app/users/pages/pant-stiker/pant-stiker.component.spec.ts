import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantStikerComponent } from './pant-stiker.component';

describe('PantStikerComponent', () => {
  let component: PantStikerComponent;
  let fixture: ComponentFixture<PantStikerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantStikerComponent]
    });
    fixture = TestBed.createComponent(PantStikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
