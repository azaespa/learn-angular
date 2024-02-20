import { Component } from '@angular/core';
import { MacrosComponent } from '../macros/macros.component';
import { FoodEatenComponent } from '../food-eaten/food-eaten.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MacrosComponent, FoodEatenComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
