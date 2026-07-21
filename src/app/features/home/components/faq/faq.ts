import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {

  opened = signal<number>(0);

  items = signal([
    {
      question: 'How long do perfumes last?',
      answer: 'Our perfumes typically last between 8 and 12 hours depending on skin type.'
    },
    {
      question: 'Do you offer shipping?',
      answer: 'Yes, we ship all over Egypt.'
    },
    {
      question: 'Can I return my order?',
      answer: 'Returns are accepted within 14 days.'
    },
    {
      question: 'Are perfumes original?',
      answer: 'We provide premium inspired fragrances with excellent quality.'
    }
  ]);

  toggle(index:number){

    this.opened.set(
      this.opened()===index
      ?-1
      :index
    );

  }

}