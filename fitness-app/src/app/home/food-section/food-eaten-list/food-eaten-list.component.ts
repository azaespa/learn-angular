import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-eaten-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food-eaten-list.component.html',
  styleUrl: './food-eaten-list.component.css',
})
export class FoodEatenListComponent {}
