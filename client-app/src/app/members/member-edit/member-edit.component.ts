import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { member } from 'src/app/_models/member';
import { user } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MemberService } from 'src/app/_services/member.service'

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm
  user: user
  memberDetail: member
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private accountService: AccountService,
    private memberService: MemberService,
    private toast: ToastrService) {
    this.accountService.CurrentUser$.pipe(take(1)).subscribe(user => this.user = user)
    console.log(this.user)
  }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember() {
    this.memberService.getMember(this.user.userName).subscribe(res => this.memberDetail = res)
  }

  update() {
    console.log(this.memberDetail)
    this.toast.success('Profile Updated')
    this.editForm.reset(this.memberDetail)
  }
}
