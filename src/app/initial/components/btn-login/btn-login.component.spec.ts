import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoginComponent } from './btn-login.component';

describe('BtnLoginComponent', () => {
  let component: BtnLoginComponent;
  let fixture: ComponentFixture<BtnLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
