import { Component, Input } from '@angular/core';
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
}
