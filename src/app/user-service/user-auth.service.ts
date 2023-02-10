import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user_signup_url = 'http://localhost:3000/user_signup_api';
  is_user_signedup = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private route: Router) { }
  onUserSignup(signup_data: Signup) {
    // console.log(signup_data);
    return this.http.post(this.user_signup_url, signup_data, { observe: 'response' }).subscribe((result) => {
      // console.log(result);
      if (result) {
        localStorage.setItem('user', JSON.stringify(result.body));
        this.route.navigate(['user-home']);
      }
    });
  }

}
