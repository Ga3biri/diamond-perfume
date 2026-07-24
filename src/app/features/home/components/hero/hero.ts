import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  hero = signal({
    title: 'Luxury Perfumes',
    subtitle: 'Discover your signature scent',
    button: 'Explore Now',
    image: 'images/products/5.png'
  });

}
