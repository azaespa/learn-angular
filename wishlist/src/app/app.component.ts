import { Component } from '@angular/core';
import { WishItem } from 'src/shared/model/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    // new WishItem("Learn Angular"),
    // new WishItem("Get coffee", true),
    // new WishItem("Find a grass that cuts itself")
  ]
  title = 'wishlist';
}
