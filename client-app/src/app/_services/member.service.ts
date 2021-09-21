import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { member } from '../_models/member';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = environment.apiUrl


  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<member[]>(this.baseUrl + 'Users')
  }

  getMember(userName: string) {
    return this.http.get<member>(this.baseUrl + 'Users/' + userName);
  }
}
