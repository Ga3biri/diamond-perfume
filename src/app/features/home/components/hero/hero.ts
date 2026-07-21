import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  hero = signal({
    title: 'Luxury Perfumes',
    subtitle: 'Discover your signature scent',
    button: 'Shop Now',
    image: 'images/products/5.png'
  });

}