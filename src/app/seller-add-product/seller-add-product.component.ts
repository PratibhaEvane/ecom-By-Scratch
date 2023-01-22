import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { SellerProductsService } from '../seller-services/seller-products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  message = ''
  constructor(private service: SellerProductsService, private route: Router) { }

  ngOnInit(): void {

  }

  addProduct(productData: Product) {
    console.log(productData)
    this.service.productAdded(productData).subscribe((data) => {
      if (data) {
        this.message = 'product added succesfully'
      }
      // message will disappear after 3 sec by using set timeout function
      setTimeout(() => (this.message = ''), 3000)

    })
    this.route.navigate(['seller-homepage'])

  }
}
