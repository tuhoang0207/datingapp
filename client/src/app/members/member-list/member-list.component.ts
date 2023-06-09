import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/userParams';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;
  genderList = [{value: 'male',display: 'Males'}, {value: 'female',display: 'Females'}];

  constructor(private MembersService: MembersService){
    this.userParams = this.MembersService.getUserParams();
  }
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.MembersService.setUserParams(this.userParams);
    this.MembersService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  resetFilters() {
    this.userParams = this.MembersService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.MembersService.setUserParams(this.userParams);
    this.loadMembers();
  }
}
