import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerProductsService {

  constructor(private http: HttpClient) { }
  // below function is created to send added product list to api
  productAdded(product_data: product) {
    return this.http.post('http://localhost:3000/added_product', product_data)
  }
}
