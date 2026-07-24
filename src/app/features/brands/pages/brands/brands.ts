import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRANDS } from '../../../../../core/constants/brands';

@Component({
  selector: 'app-brands-page',
  imports: [RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class BrandsPage {
  brands = signal(BRANDS);
}
