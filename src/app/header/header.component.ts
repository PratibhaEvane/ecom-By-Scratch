import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuUrlType: string = ''
  constructor(private route: Router) { }
  // 
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      console.log(val.url)
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn('in seller area')
          this.menuUrlType = 'seller'
        }
        else {
          console.log('outside the seller area')
          this.menuUrlType = 'default'

        }
      }
    })
  }



}
