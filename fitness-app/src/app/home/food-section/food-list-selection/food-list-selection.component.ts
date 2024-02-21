import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { Food } from '../../../food';
import { FoodService } from '../../../food.service';

@Component({
  selector: 'app-food-list-selection',
  standalone: true,
  imports: [RouterModule, FoodComponent],
  templateUrl: './food-list-selection.component.html',
  styleUrl: './food-list-selection.component.css'
})
export class FoodListSelectionComponent {
  foodList : Food[] = [];

  foodService : FoodService = inject(FoodService);

  constructor() {
    this.foodList = this.foodService.getFoodList();
  }
}
