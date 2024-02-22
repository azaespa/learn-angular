import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class FoodEatenService {
  protected foodEatenList: Food[] = [];

  constructor() {}

  setFoodEatenList(food: Food) {
    this.foodEatenList.push(food);
  }

  getFoodEatenList(): Food[] {
    return this.foodEatenList;
  }

  getFoodEatenListLength() {
    return this.foodEatenList.length;
  }

  removeFoodFromEatenList(food: Food) {
    console.log(this.foodEatenList);
    this.foodEatenList = this.foodEatenList.filter((f) => f != food);
    console.log(this.foodEatenList);
  }
}
