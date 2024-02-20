import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  protected foodList : Food[] = [
    {
      id: 0,
      name: "Rice",
      weight: 100,
      calories: 130,
      protein: 2.7,
      carbs: 28
    }
  ]
  constructor() { }
}
