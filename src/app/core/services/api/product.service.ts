import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpService);

  getProducts(params?: unknown) {

    return this.http.get(
      '/products',
      params as Record<string, unknown>
    );

  }

  getProduct(id: number) {

    return this.http.get(

      `/products/${id}`

    );

  }

}