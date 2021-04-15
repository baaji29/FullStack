import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fullstack-Dev';
  // users: any;
  constructor(private http: HttpClient, private accountService: AccountService) { }
  ngOnInit() {
    // this.getUser();
    this.setCurrentUser();
  }

  // const timer = JSON.parse(localStorage.getItem('timer'));
  // if (timer && (Date.now() > timer)) {
  //   this.accountService.logout()
  // }
  setCurrentUser() {
    const user: user = JSON.parse(localStorage.getItem('user'))
    this.accountService.setCurrentUser(user)

  }
  // getUser() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
