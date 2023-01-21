import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navUrlType: string = ''
  seller_name: string = ''
  constructor(private route: Router) { }
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
}
