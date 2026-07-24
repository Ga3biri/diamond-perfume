import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../../../../../core/constants/categories';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {

  categories = signal(CATEGORIES);

}
