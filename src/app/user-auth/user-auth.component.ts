import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  show_user_login_form: boolean = true
  buyerLoginup(userLoginData: any) {

  }
  constructor() { }
  ngOnInit(): void {

  }
}
