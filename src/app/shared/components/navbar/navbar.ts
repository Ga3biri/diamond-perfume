import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU } from '../../../../core/constants/menu';
import { LayoutService } from '../../../core/services/layout';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  menu = signal(MENU);
  layout = inject(LayoutService);
  cartService = inject(CartService);

}
