import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { user } from '../_models/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean
  // CurrentUser$: Observable<user>

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.getCurrentUser()
    // this.CurrentUser$ = this.accountService.CurrentUser$
  }

  login() {
    debugger
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
      console.log(response)
      // this.loggedIn = true
    },
      // error => {
      //   console.log(error)
      //   this.toastr.error(error.error)
      // }
    );
  }
  logout() {
    this.accountService.logout()
    this.router.navigateByUrl('/')
    // this.loggedIn = false
  }

  // getCurrentUser() {
  //   debugger
  //   this.accountService.CurrentUser$.subscribe(user => {
  //     this.loggedIn = !!user
  //   }, error => {
  //     console.log(error)
  //   })
  // }
}
