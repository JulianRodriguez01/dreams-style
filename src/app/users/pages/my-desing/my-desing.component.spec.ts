import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesingComponent } from './my-desing.component';

describe('MyDesingComponent', () => {
  let component: MyDesingComponent;
  let fixture: ComponentFixture<MyDesingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDesingComponent]
    });
    fixture = TestBed.createComponent(MyDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
