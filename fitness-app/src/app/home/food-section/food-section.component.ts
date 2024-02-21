import { Component } from '@angular/core';
import { FoodEatenComponent } from './food-eaten/food-eaten.component';
import { FoodListSelectionComponent } from './food-list-selection/food-list-selection.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-food-section',
  standalone: true,
  imports: [FoodEatenComponent, FoodListSelectionComponent, RouterOutlet],
  templateUrl: './food-section.component.html',
  styleUrl: './food-section.component.css'
})
export class FoodSectionComponent {

}
