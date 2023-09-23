import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialComponent } from './initial.component';

describe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialComponent]
    });
    fixture = TestBed.createComponent(InitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
