import { Component } from '@angular/core';
import { FoodSectionComponent } from './food-section/food-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
