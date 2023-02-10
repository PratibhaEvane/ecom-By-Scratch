import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../data-type';
import { SearchBarService } from '../home-page-service/search-bar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navUrlType: string = '';
  seller_name: string = '';
  user_name: string = '';
  search_product_result: undefined | Product[];
  loginIcon = faUser;
  signinPopup: boolean = false;
  constructor(private route: Router, private service: SearchBarService) { }
  // this will change the navbar on url changes
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let localStorageData_seller = localStorage.getItem('seller');
          let seller_data = localStorageData_seller && JSON.parse(localStorageData_seller)[0];
          this.seller_name = seller_data.username;
          this.navUrlType = 'seller';
        }
        else {
          this.navUrlType = 'default';
        }
      }
    });
  }
  // function for product serach in navbar
  searchProduct(e: KeyboardEvent) {
    if (e) {
      const element = e.target as HTMLInputElement;
      // console.log(element.value)
      this.service.product_search(element.value).subscribe((data) => {
        this.search_product_result = data;
      });
    }
  }
  blankSearchField() {
    this.search_product_result = undefined;
  }
  // below function is created to open search page on product searching in navbar
  openSearch(val: string) {
    // console.log(val)
    this.route.navigate([`search/${val}`]);
  }
  // below function is created to redirect the prouct detail page on select any product while product searhing in nav-bar
  redirectToProductDetailPage(id: number) {
    this.route.navigate(['/details/' + id]);
  }
  // below function is created to open signin option list on click upon signin button
  openSignInPopup() {
    this.signinPopup = !this.signinPopup;
  }

}
