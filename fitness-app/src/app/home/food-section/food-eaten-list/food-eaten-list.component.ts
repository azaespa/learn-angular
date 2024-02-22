import { Component, inject } from '@angular/core';
import { Food } from '../../../food';
import { FoodEatenService } from '../../../food-eaten.service';
import { RouterModule } from '@angular/router';
import { FoodEatenComponent } from './food-eaten/food-eaten.component';

@Component({
  selector: 'app-food-eaten-list',
  standalone: true,
  imports: [RouterModule, FoodEatenComponent],
  templateUrl: './food-eaten-list.component.html',
  styleUrl: './food-eaten-list.component.css',
})
export class FoodEatenListComponent {
  foodEatenList: Food[] = [];

  foodEatenService: FoodEatenService = inject(FoodEatenService);

  constructor() {
    this.foodEatenList = this.foodEatenService.getFoodEatenList();
  }

  removeFoodFromEatenList(food: Food) {
    this.foodEatenService.removeFoodFromEatenList(food);
  }
}
