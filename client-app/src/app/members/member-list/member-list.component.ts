import { Component, OnInit } from '@angular/core';
import { member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  Members: member[];

  constructor(private MemberService: MemberService) { }

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember() {
    this.MemberService.getMembers().subscribe(members => {
      this.Members = members
      console.log(this.Members)
    })
  }

}
