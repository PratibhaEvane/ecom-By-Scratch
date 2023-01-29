import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { SellerProductsService } from '../seller-services/seller-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_details: undefined | Product
  constructor(private activeRoute: ActivatedRoute, private service: SellerProductsService) { }

  ngOnInit(): void {
    let product_id = this.activeRoute.snapshot.paramMap.get('productID')
    // console.log(product_id)
    product_id && this.service.getProductDetail(product_id).subscribe((data) => {
      this.product_details = data
    })
  }

}
