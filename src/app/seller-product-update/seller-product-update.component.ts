import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerProductsService } from '../seller-services/seller-products.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-product-update',
  templateUrl: './seller-product-update.component.html',
  styleUrls: ['./seller-product-update.component.css']
})
export class SellerProductUpdateComponent implements OnInit {

  recievied_product_data_from_api: undefined | Product

  constructor(private route: ActivatedRoute, private service: SellerProductsService) { }

  ngOnInit(): void {
    let product_id = this.route.snapshot.paramMap.get('id')
    console.log(product_id)
    product_id && this.service.getProductDetail(product_id).subscribe((result) => {
      console.log(result)
      this.recievied_product_data_from_api = result
    })
  }
  updateProduct(data: any) { }
}
