import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstant } from '../app.constant';
import { environment } from '../../environments/environment';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = `${environment.api}${appConstant.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
