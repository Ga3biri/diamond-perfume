import { Component, signal } from '@angular/core';
import { AnnouncementBar } from '../announcement-bar/announcement-bar';
import { Navbar } from '../navbar/navbar';
import { MENU } from '../../../../core/constants/menu';

@Component({
  selector: 'app-header',
  imports: [ AnnouncementBar, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  menu = signal(MENU);

}