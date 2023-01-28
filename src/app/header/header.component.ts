import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { SearchBarService } from '../home-page-service/search-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navUrlType: string = ''
  seller_name: string = ''
  search_product_result: undefined | Product[]
  constructor(private route: Router, private service: SearchBarService) { }
  // this will change the navbar on url changes
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.navUrlType = 'seller'
          if (localStorage.getItem('seller')) {
            let localStorageData = localStorage.getItem('seller');
            let seller_data = localStorageData && JSON.parse(localStorageData)[0];
            this.seller_name = seller_data.username
          }
        }
        else {
          this.navUrlType = 'default'
        }
      }
    })
  }
  // function for product serach in navbar
  searchProduct(e: KeyboardEvent) {
    if (e) {
      const element = e.target as HTMLInputElement
      // console.log(element.value)
      this.service.product_search(element.value).subscribe((data) => {
        this.search_product_result = data
      })
    }
  }
  blankSearchField() {
    this.search_product_result = undefined
  }
  // below function is created to open search page on product searching in navbar
  openSearch(val: string) {
    // console.log(val)
    this.route.navigate([`search/${val}`])
  }
}
