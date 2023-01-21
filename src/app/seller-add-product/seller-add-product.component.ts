import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { product } from '../data-type';
import { SellerAuthService } from '../seller-services/seller-auth.service';
import { SellerProductsService } from '../seller-services/seller-products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  message = ''
  constructor(private service: SellerProductsService) { }

  addProduct(productData: product) {
    console.log(productData)
    this.service.productAdded(productData).subscribe((data) => {
      if (data) {
        this.message = 'product added succesfully'
      }
      // message will disappear after 3 sec by using set timeout function
      setTimeout(() => (this.message = ''), 3000)

    })
  }
}
