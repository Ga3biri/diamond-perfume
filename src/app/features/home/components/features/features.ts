import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {

  items = signal([
    {
      icon: 'bi-truck',
      title: 'Free Shipping',
      desc: 'Orders over LE 1000'
    },
    {
      icon: 'bi-award',
      title: 'Premium Quality',
      desc: 'Long lasting perfumes'
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Easy Returns',
      desc: 'Within 14 days'
    },
    {
      icon: 'bi-headset',
      title: 'Support',
      desc: '24/7 Customer Service'
    }
  ]);

}