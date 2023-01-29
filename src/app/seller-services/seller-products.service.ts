import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerProductsService {
  product_api = 'http://localhost:3000/added_product'

  constructor(private http: HttpClient) { }
  // below function is created to send new product add in list to api
  productAdded(product_data: Product) {
    return this.http.post(this.product_api, product_data)
  }

  // below function is created to fecth the  deatils of all product from api
  fetchProductDetails() {
    return this.http.get<Product[]>(this.product_api)
  }
  // below function is created to delete the product deatils from api
  deleteProductFromApi(id: number) {
    return this.http.delete(`http://localhost:3000/added_product/${id}`)
  }
  // below function is created to fecth the requested/particular product deatils from api

  getProductDetail(id: string) {
    return this.http.get<Product>(`http://localhost:3000/added_product/${id}`)

  }

}
