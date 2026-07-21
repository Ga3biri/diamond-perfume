import { Component, model, output } from '@angular/core';

@Component({
  selector: 'app-search-overlay',
  imports: [],
  templateUrl: './search-overlay.html',
  styleUrl: './search-overlay.scss'
})
export class SearchOverlay {

  opened = model(false);

  closed = output<void>();

  close() {
    this.opened.set(false);
    this.closed.emit();
  }

}