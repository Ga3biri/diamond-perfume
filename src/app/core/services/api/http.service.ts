import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient);

  private api = environment.apiUrl;

  get<T>(url: string, params?: Record<string, unknown>) {

    return this.http.get<T>(
      this.api + url,
      {
        params: this.buildParams(params)
      }
    );

  }

  post<T>(url: string, body: unknown) {

    return this.http.post<T>(
      this.api + url,
      body
    );

  }

  put<T>(url: string, body: unknown) {

    return this.http.put<T>(
      this.api + url,
      body
    );

  }

  patch<T>(url: string, body: unknown) {

    return this.http.patch<T>(
      this.api + url,
      body
    );

  }

  delete<T>(url: string) {

    return this.http.delete<T>(
      this.api + url
    );

  }

  private buildParams(params?: Record<string, unknown>) {

    let httpParams = new HttpParams();

    if (!params) {

      return httpParams;

    }

    Object.entries(params).forEach(([key, value]) => {

      if (
        value !== null &&
        value !== undefined &&
        value !== ''
      ) {

        httpParams = httpParams.set(
          key,
          String(value)
        );

      }

    });

    return httpParams;

  }

}