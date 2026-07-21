import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout';

@Component({
  selector: 'app-wishlist-drawer',
  imports: [],
  templateUrl: './wishlist-drawer.html',
  styleUrl: './wishlist-drawer.scss'
})
export class WishlistDrawer {

  layout = inject(LayoutService);

}