import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) { }
  // below function is created to fecth the deatils of searched product on navbar from api
  product_search(query_product: string) {
    return this.http.get<Product[]>(`http://localhost:3000/added_product?q=${query_product}`)
  }
}
