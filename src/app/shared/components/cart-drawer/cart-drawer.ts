import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout';

@Component({
  selector: 'app-cart-drawer',
  imports: [],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss'
})
export class CartDrawer {

  layout = inject(LayoutService);

}