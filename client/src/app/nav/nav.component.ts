import { Observable, of } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
  // currentUser$? : Observable<User>;
  
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  logout() {
    console.log('logout');
    this.accountService.logout();
    
  }

  
}
