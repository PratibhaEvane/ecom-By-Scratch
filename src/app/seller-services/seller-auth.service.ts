import { Injectable } from '@angular/core';
import {HttpClient }from '@angular/common/http'
import { Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
 seller_signup_url='http://localhost:3000/sellerSignup'

  constructor(private http:HttpClient) { }

  // this function will sent seller registraion data on API
  onSellerSignup(signup_data:Signup){
    return this.http.post(this.seller_signup_url,signup_data)
  }
}
