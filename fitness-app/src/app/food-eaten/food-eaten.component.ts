import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-eaten',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food-eaten.component.html',
  styleUrl: './food-eaten.component.css'
})
export class FoodEatenComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
