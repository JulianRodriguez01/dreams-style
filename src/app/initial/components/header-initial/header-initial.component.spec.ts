import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInitialComponent } from './header-initial.component';

describe('HeaderInitialComponent', () => {
  let component: HeaderInitialComponent;
  let fixture: ComponentFixture<HeaderInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderInitialComponent]
    });
    fixture = TestBed.createComponent(HeaderInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
