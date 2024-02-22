import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../../food';

@Component({
  selector: 'app-food-eaten',
  standalone: true,
  imports: [],
  templateUrl: './food-eaten.component.html',
  styleUrl: './food-eaten.component.css',
})
export class FoodEatenComponent {
  @Input() foodEaten!: Food;

  @Output() removeFromFoodEatenList: EventEmitter<Food> =
    new EventEmitter<Food>();

  onRemoveFromFoodEatenList() {
    this.removeFromFoodEatenList.emit(this.foodEaten);
  }
}
