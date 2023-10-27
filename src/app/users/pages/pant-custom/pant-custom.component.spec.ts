import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantCustomComponent } from './pant-custom.component';

describe('PantCustomComponent', () => {
  let component: PantCustomComponent;
  let fixture: ComponentFixture<PantCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantCustomComponent]
    });
    fixture = TestBed.createComponent(PantCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
