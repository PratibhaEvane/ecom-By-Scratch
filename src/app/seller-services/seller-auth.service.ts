import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Signup, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  seller_signup_url = 'http://localhost:3000/seller_signup_api'
  is_seller_signedup = new BehaviorSubject<boolean>(false);
  show_message = new EventEmitter<boolean>(false) // this will display succussfull/error messages

  constructor(private http: HttpClient, private route: Router) { }

  // this function will sent seller registraion data on API
  onSellerSignup(signup_data: Signup) {
    this.http.post(this.seller_signup_url, signup_data, { observe: 'response' }).subscribe((result) => {
      console.log(result)
      if (result) {
        this.is_seller_signedup.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['seller-home'])

      } else {
        this.show_message.emit(true)

      }

    })
  }
  // this function is created for seller can'nt logout automatically on page reload
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.is_seller_signedup.next(true);
      this.route.navigate(['seller-homepage'])
    }
  }
  // this function will sent seller login data on API
  onSellerLogin(login_data: Login) {
    this.http.get(`http://localhost:3000/seller_signup_api?${login_data.email}&${login_data.password}`, { observe: 'response' }).subscribe((result: any) => {
      console.log(result)
      if (result && result.body && result.body.length) {
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['seller-homepage'])
      } else {
        this.show_message.emit(true)
      }
    })
  }
}
