import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantPocketComponent } from './pant-pocket.component';

describe('PantPocketComponent', () => {
  let component: PantPocketComponent;
  let fixture: ComponentFixture<PantPocketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantPocketComponent]
    });
    fixture = TestBed.createComponent(PantPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
