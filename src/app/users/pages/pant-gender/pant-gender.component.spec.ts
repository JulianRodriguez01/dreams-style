import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantGenderComponent } from './pant-gender.component';

describe('PantGenderComponent', () => {
  let component: PantGenderComponent;
  let fixture: ComponentFixture<PantGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantGenderComponent]
    });
    fixture = TestBed.createComponent(PantGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
