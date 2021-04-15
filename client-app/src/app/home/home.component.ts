import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false
  //users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    debugger
    // this.getUser()
  }

  registerToggle() {
    this.registerMode = !this.registerMode
  }
  // getUser() {
  //   debugger
  //   this.http.get('https://localhost:5001/api/users').subscribe(userList => this.users = userList);
  // }
  logut(event: boolean) {
    this.registerMode = event
  }
}
