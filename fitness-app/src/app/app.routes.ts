import { Routes } from '@angular/router';
import { FoodEatenComponent } from './home/food-section/food-eaten/food-eaten.component';
import { FoodListSelectionComponent } from './home/food-section/food-list-selection/food-list-selection.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodEatenComponent,
  },
  {
    path: 'Food-List-Selection',
    component: FoodListSelectionComponent
  },
];
