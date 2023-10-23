import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantSizeComponent } from './pant-size.component';

describe('PantSizeComponent', () => {
  let component: PantSizeComponent;
  let fixture: ComponentFixture<PantSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantSizeComponent]
    });
    fixture = TestBed.createComponent(PantSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
