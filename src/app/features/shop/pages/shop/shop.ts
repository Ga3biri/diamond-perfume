import { Component, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltersSidebar } from '../../components/filters-sidebar/filters-sidebar';
import { ProductsGrid } from '../../components/products-grid/products-grid';
import { PRODUCTS } from '../../../../../core/constants/products';

@Component({
  selector: 'app-shop',
  imports: [FiltersSidebar, ProductsGrid],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {
  allProducts = PRODUCTS;
  showMobileFilters = signal(false);

  selectedCategories = signal<string[]>([]);
  selectedBrand = signal<string | null>(null);
  minPrice = signal(0);
  maxPrice = signal(10000);
  sortBy = signal('default');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.selectedCategories.set([category]);
      }
      const brand = params['brand'];
      if (brand) {
        this.selectedBrand.set(brand);
      }
    });
  }

  filteredProducts = computed(() => {
    let filtered = [...this.allProducts];

    const cats = this.selectedCategories();
    if (cats.length > 0) {
      filtered = filtered.filter(p => cats.includes(p.category ?? ''));
    }

    const brand = this.selectedBrand();
    if (brand) {
      filtered = filtered.filter(p => p.brand === brand);
    }

    filtered = filtered.filter(
      p => (p.price ?? 0) >= this.minPrice() && (p.price ?? 0) <= this.maxPrice()
    );

    const sort = this.sortBy();
    if (sort === 'price-asc') filtered.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    else if (sort === 'price-desc') filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    else if (sort === 'rating') filtered.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    else if (sort === 'name') filtered.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));

    return filtered;
  });

  onFiltersChanged(filters: { categories: string[]; minPrice: number; maxPrice: number; sortBy: string }) {
    this.selectedCategories.set(filters.categories);
    this.minPrice.set(filters.minPrice);
    this.maxPrice.set(filters.maxPrice);
    this.sortBy.set(filters.sortBy);
  }
}
