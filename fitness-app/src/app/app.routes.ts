import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodEatenComponent } from './food-eaten/food-eaten.component';

export const routes: Routes = [
    {
        path: '',
        component: FoodEatenComponent,
        title: 'Home Page'
    },
    {
        path: 'food-list',
        component: FoodComponent,
        title: 'Food List'
    }
];
