import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:5001/api/"
  private CurrentUserSource = new ReplaySubject<user>(1)
  CurrentUser$ = this.CurrentUserSource.asObservable()

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + "Login", model).pipe(
      map((response: user) => {
        const user = response
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          // const time_to_login = new Date()
          // var mins = new Date(time_to_login.getDate() + (2 * 60 * 1000))  
          // localStorage.setItem('timer', JSON.stringify(mins));
          this.CurrentUserSource.next(user)
        }
      })
    );
  }

  Register(model: any) {
    return this.http.post(this.baseUrl + "Register", model).pipe(
      map((user: user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.CurrentUserSource.next(user)
        }
        return user;
      })
    );
  }

  setCurrentUser(user: user) {
    this.CurrentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem('user')
    // localStorage.removeItem('timer')
    this.CurrentUserSource.next(null)
  }
}
