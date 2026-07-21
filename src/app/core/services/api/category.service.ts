import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpService);

  getCategories() {

    return this.http.get(

      '/categories'

    );

  }

}