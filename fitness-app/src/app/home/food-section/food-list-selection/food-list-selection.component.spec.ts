import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListSelectionComponent } from './food-list-selection.component';

describe('FoodListSelectionComponent', () => {
  let component: FoodListSelectionComponent;
  let fixture: ComponentFixture<FoodListSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodListSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodListSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
