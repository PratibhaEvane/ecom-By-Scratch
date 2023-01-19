import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from '../seller-services/seller-auth.service';
import { Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private service:SellerAuthService, private route:Router){}

sellerSignup(seller_signup_data:Signup){
  this.service.onSellerSignup(seller_signup_data).subscribe((res)=>{
  console.log(res)

  })
}
sellerLoginup(data:any){}
}
 