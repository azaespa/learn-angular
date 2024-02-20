import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  // @Input() foodList! : Food;
  // foodList : Food[] = [];
}
