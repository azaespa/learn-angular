import { Component } from '@angular/core';
import { FoodListSelectionComponent } from './food-list-selection/food-list-selection.component';
import { RouterOutlet } from '@angular/router';
import { FoodEatenListComponent } from './food-eaten-list/food-eaten-list.component';

@Component({
  selector: 'app-food-section',
  standalone: true,
  imports: [FoodEatenListComponent, FoodListSelectionComponent, RouterOutlet],
  templateUrl: './food-section.component.html',
  styleUrl: './food-section.component.css',
})
export class FoodSectionComponent {}
