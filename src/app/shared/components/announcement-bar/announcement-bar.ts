import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-announcement-bar',
  
  templateUrl: './announcement-bar.html',
  styleUrl: './announcement-bar.scss'
})
export class AnnouncementBar {

  offers = signal([

    "🔥 خصم 10% على أي أوردر أكثر من 500 جنيه باستخدام كود Eid10",

    "🔥 خصم 10% على أي أوردر أكثر من 500 جنيه باستخدام كود Eid10",

    "🔥 خصم 10% على أي أوردر أكثر من 500 جنيه باستخدام كود Eid10",

    "🔥 خصم 10% على أي أوردر أكثر من 500 جنيه باستخدام كود Eid10"

  ]);

}