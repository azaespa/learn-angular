import { Component } from '@angular/core';
import { MacrosComponent } from '../macros/macros.component';
import { FoodEatenComponent } from '../food-eaten/food-eaten.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MacrosComponent, FoodEatenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
