import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpService);

  login(body: unknown) {

    return this.http.post(

      '/auth/login',

      body

    );

  }

  register(body: unknown) {

    return this.http.post(

      '/auth/register',

      body

    );

  }

}