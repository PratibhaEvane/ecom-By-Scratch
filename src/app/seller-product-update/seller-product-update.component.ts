import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerProductsService } from '../seller-services/seller-products.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-product-update',
  templateUrl: './seller-product-update.component.html',
  styleUrls: ['./seller-product-update.component.css']
})
export class SellerProductUpdateComponent implements OnInit {

  recievied_product_data_from_api: undefined | Product
  message = ''

  constructor(private activeRoute: ActivatedRoute, private service: SellerProductsService, private route: Router) { }

  ngOnInit(): void {
    let product_id = this.activeRoute.snapshot.paramMap.get('id')
    console.log(product_id)
    product_id && this.service.getProductDetail(product_id).subscribe((result) => {
      console.log(result)
      this.recievied_product_data_from_api = result
    })
  }



  updateProduct(data: Product) {
    if (this.recievied_product_data_from_api) {
      data.id = this.recievied_product_data_from_api.id
    }
    this.service.updateProductFromApi(data).subscribe((result) => {
      if (result) {
        this.message = 'Product updated successfully'
        this.route.navigate(['seller-homepage'])

      }

    })

  }
}
