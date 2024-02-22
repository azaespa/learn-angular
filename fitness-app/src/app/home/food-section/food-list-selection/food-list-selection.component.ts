import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { Food } from '../../../food';
import { FoodService } from '../../../food.service';
import { FoodEatenService } from '../../../food-eaten.service';

@Component({
  selector: 'app-food-list-selection',
  standalone: true,
  imports: [RouterModule, FoodComponent],
  templateUrl: './food-list-selection.component.html',
  styleUrl: './food-list-selection.component.css',
})
export class FoodListSelectionComponent {
  foodList: Food[] = [];

  foodEatenService: FoodEatenService = inject(FoodEatenService);
  foodService: FoodService = inject(FoodService);

  constructor() {
    this.foodList = this.foodService.getFoodList();
  }

  setFoodEatenList(food: Food) {
    this.foodEatenService.setFoodEatenList(food);
  }
}
