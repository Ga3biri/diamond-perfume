import { Component, signal } from '@angular/core';
import { BRANDS } from '../../../../../core/constants/brands';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands {

  brands = signal(BRANDS);

}