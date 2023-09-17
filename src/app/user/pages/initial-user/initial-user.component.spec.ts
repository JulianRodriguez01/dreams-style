import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialUserComponent } from './initial-user.component';

describe('InitialUserComponent', () => {
  let component: InitialUserComponent;
  let fixture: ComponentFixture<InitialUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialUserComponent]
    });
    fixture = TestBed.createComponent(InitialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
