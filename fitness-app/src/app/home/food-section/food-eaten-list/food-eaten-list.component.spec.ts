import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEatenListComponent } from './food-eaten-list.component';

describe('FoodEatenListComponent', () => {
  let component: FoodEatenListComponent;
  let fixture: ComponentFixture<FoodEatenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodEatenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodEatenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
