import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user_signup_url = 'http://localhost:3000/user_signup_api';
  constructor(private http: HttpClient, private route: Router) { }
  onUserSignup(signup_data: Signup) {
    // console.log(signup_data);
    return this.http.post(this.user_signup_url, signup_data, { observe: 'response' }).subscribe((data) => {
      // console.log(data);
      if (data) {
        localStorage.setItem('user', JSON.stringify(data.body));
        this.route.navigate(['']);
      }
    });
  }

}
