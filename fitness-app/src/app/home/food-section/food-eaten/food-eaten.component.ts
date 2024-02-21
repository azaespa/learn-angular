import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Food } from '../../../food';

@Component({
  selector: 'app-food-eaten',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food-eaten.component.html',
  styleUrl: './food-eaten.component.css'
})
export class FoodEatenComponent {
  foodEatenList : Food[] = [];
}
