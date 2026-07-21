import { Component, signal } from '@angular/core';
import { CATEGORIES } from '../../../../../core/constants/categories';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {

  categories = signal(CATEGORIES);

}