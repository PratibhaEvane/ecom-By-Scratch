import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from '../seller-services/seller-auth.service';
import { Signup, Login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  show_login_form = true
  show_msg = ''

  constructor(private seller_service: SellerAuthService, private route: Router) { }
  ngOnInIt(): void {
    this.seller_service.reloadSeller()
  }

  sellerSignup(seller_signup_data: Signup) {
    this.seller_service.onSellerSignup(seller_signup_data);
    this.seller_service.show_message.subscribe((error) => {
      if (error) {
        this.show_msg = 'please enter vaalid details*'
      }
    })
  }
  sellerLoginup(seller_login_data: Login) {
    this.seller_service.onSellerLogin(seller_login_data);
    this.seller_service.show_message.subscribe((error) => {
      if (error) {
        this.show_msg = 'invalid credential*'
      }
    })
  }

  openLoginForm() {
    this.show_login_form = true

  }
  openSignupForm() {
    this.show_login_form = false

  }
}
