import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Food, FoodEaten } from '../../../../food';
import { FoodEatenService } from '../../../../food-eaten.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  @Input() food!: Food;

  @Output()
  addToFoodEatenList: EventEmitter<Food> = new EventEmitter<Food>();

  foodEatenService: FoodEatenService = inject(FoodEatenService);
  onAddToFoodEatenList() {
    const foodCopy = this.food;
    let foodEaten = {} as FoodEaten;
    foodEaten.id = this.foodEatenService.getFoodEatenListLength() + 1;

    for (let key in foodCopy) {
      if (key === 'id') {
        foodEaten.foodId = foodCopy[key];
      }
    }

    console.log(foodEaten);
    this.addToFoodEatenList.emit(this.food);
  }
}
