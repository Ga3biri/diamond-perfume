import { Component, input } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { ProductCard } from '../../../../shared/ui/product-card/product-card';

@Component({
  selector: 'app-product-section',
  imports: [ProductCard],
  templateUrl: './product-section.html',
  styleUrl: './product-section.scss'
})
export class ProductSection {

  title = input.required<string>();

  products = input.required<Product[]>();

}