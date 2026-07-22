import { Component, signal, output } from '@angular/core';

@Component({
  selector: 'app-filters-sidebar',
  imports: [],
  templateUrl: './filters-sidebar.html',
  styleUrl: './filters-sidebar.scss',
})
export class FiltersSidebar {

  categories: string[] = ['Men', 'Women', 'Unisex', 'Winter'];

  selectedCategories = signal<string[]>([]);
  minPrice = signal<number>(0);
  maxPrice = signal<number>(10000);
  sortBy = signal<string>('default');

  filtersChanged = output<{
    categories: string[];
    minPrice: number;
    maxPrice: number;
    sortBy: string;
  }>();

  private emitFilters() {
    this.filtersChanged.emit({
      categories: this.selectedCategories(),
      minPrice: this.minPrice(),
      maxPrice: this.maxPrice(),
      sortBy: this.sortBy(),
    });
  }

  toggleCategory(cat: string) {
    const current = this.selectedCategories();
    if (current.includes(cat)) {
      this.selectedCategories.set(current.filter(c => c !== cat));
    } else {
      this.selectedCategories.set([...current, cat]);
    }
    this.emitFilters();
  }

  clearFilters() {
    this.selectedCategories.set([]);
    this.minPrice.set(0);
    this.maxPrice.set(10000);
    this.sortBy.set('default');
    this.emitFilters();
  }

}
