import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { SellerProductsService } from '../seller-services/seller-products.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-homepage',
  templateUrl: './seller-homepage.component.html',
  styleUrls: ['./seller-homepage.component.css']
})
export class SellerHomepageComponent implements OnInit {

  product_list: undefined | Product[]
  icon = faTrash
  constructor(private service: SellerProductsService, private route: Router) {

  }

  ngOnInit(): void {
    // fetch all product list from api via service
    this.service.fetchProductDetails().subscribe((data) => {
      console.log(data)
      this.product_list = data
    })
  }
  delete(id: number) {
    this.service.deleteProductFromApi(id).subscribe((result) => {
      console.log(result, "deleted")
    })
    window.location.reload();

  }


}
