import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { SellerProductsService } from '../seller-services/seller-products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  product_list: undefined | Product[]

  constructor(private service: SellerProductsService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {

  }
}
