import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PRODUCTS } from '../../../../../core/constants/products';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  private route = inject(ActivatedRoute);

  readonly Math = Math;
  quantity = signal(1);

  product = toSignal(
    this.route.paramMap.pipe(
      map(params => {
        const id = Number(params.get('id'));
        return PRODUCTS.find(p => p.id === id) ?? null;
      })
    )
  );

  increaseQty() {
    this.quantity.update(q => q + 1);
  }

  decreaseQty() {
    this.quantity.update(q => Math.max(1, q - 1));
  }

}
