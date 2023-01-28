import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) { }
  //function for product search on navbar via api
  product_search(query_product: string) {
    return this.http.get<Product[]>(`http://localhost:3000/added_product?q=${query_product}`)
  }
}
