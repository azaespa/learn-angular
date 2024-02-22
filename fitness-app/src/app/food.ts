export interface Food {
  id: number;
  name: string;
  weight: number;
  calories: number;
  protein: number;
  carbs: number;
}

export interface FoodEaten {
  id: number;
  foodId: number;
  name: string;
  weight: number;
  calories: number;
  protein: number;
  carbs: number;
}
