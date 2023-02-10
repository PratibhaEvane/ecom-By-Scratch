import { Component, OnInit } from '@angular/core';
import { Signup } from '../data-type';
import { UserAuthService } from '../user-service/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  show_user_login_form: boolean = true;
  constructor(private service: UserAuthService) { }

  ngOnInit(): void {

  }
  userLogin(userLoginData: any) {

  }

  // below function is created to collect user signup data
  userSignup(userSignupData: Signup) {
    // console.log(userSignupData);
    this.service.onUserSignup(userSignupData);
  }

  openLoginForm() {
    this.show_user_login_form = true;

  }
  openSignupForm() {
    this.show_user_login_form = false;

  }
}
