import { Routes } from '@angular/router';
import { FoodEatenListComponent } from './home/food-section/food-eaten-list/food-eaten-list.component';
import { FoodListSelectionComponent } from './home/food-section/food-list-selection/food-list-selection.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodEatenListComponent,
  },
  {
    path: 'Food-List-Selection',
    component: FoodListSelectionComponent,
  },
];
