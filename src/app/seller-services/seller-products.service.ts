import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerProductsService {
  product_api = 'http://localhost:3000/added_product'

  constructor(private http: HttpClient) { }
  // below function is created to send added product list to api
  productAdded(product_data: Product) {
    return this.http.post(this.product_api, product_data)
  }

  // below function is created to fecth the product deatils from api
  fetchProductDetails() {
    return this.http.get<Product[]>(this.product_api)
  }
  // below function is created to delete the product deatils from api
  deleteProductFromApi(id: number) {
    return this.http.delete(`http://localhost:3000/added_product/${id}`)
  }
  // below function is created to fetch the particuler product deatils from api
  getProductDetail(id: string) {
    return this.http.get<Product>(`http://localhost:3000/added_product/${id}`)
  }
  // below function is created to fetch the particuler product deatils from api
  updateProductFromApi(data: Product) {
    return this.http.put(`http://localhost:3000/added_product/${data.id}`, data)
  }
}
