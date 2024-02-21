import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../../food';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() food! : Food;

  @Output()
  addedToEatenList : EventEmitter<Food> = new EventEmitter<Food>();

  addToEatenList() {
    this.addedToEatenList.emit(this.food);
  }
}
