import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { SellerProductsService } from '../seller-services/seller-products.service';

@Component({
  selector: 'app-seller-homepage',
  templateUrl: './seller-homepage.component.html',
  styleUrls: ['./seller-homepage.component.css']
})
export class SellerHomepageComponent implements OnInit {

  product_list: undefined | product[]
  constructor(private service: SellerProductsService) {

  }

  ngOnInit(): void {
    this.service.fetchProductDetails().subscribe((data) => {
      console.log(data)
      this.product_list = data
    })
  }

}
