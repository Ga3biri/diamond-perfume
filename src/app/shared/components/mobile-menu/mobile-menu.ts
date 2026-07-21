import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../../core/services/layout';
import { MENU } from '../../../../core/constants/menu';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss'
})
export class MobileMenu {

  layout = inject(LayoutService);

  menu = MENU;

}