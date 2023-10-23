import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantFabricComponent } from './pant-fabric.component';

describe('PantFabricComponent', () => {
  let component: PantFabricComponent;
  let fixture: ComponentFixture<PantFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantFabricComponent]
    });
    fixture = TestBed.createComponent(PantFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
