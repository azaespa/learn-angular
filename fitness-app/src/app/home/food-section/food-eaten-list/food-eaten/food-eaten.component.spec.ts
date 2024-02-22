import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEatenComponent } from './food-eaten.component';

describe('FoodEatenComponent', () => {
  let component: FoodEatenComponent;
  let fixture: ComponentFixture<FoodEatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodEatenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodEatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
