import { AccountService } from './_services/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit ,Injectable} from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  title = 'dating app'; //declare variables name title and assign value
  users: any; //declare variables

  constructor(private accountService: AccountService) {}

  ngOnInit() { 
    // this.getUser();
    this.setCurrentUser()
  }

  setCurrentUser() { 
    
    const user : User = JSON.parse(localStorage.getItem('user') as string); //convert type to string
    
    //get data user from local storage and pass it to current user
    this.accountService.setCurrentUser(user);
  }

  // getUser() { //declare function
  //   // debugger
  //   this.http.get('https://localhost:5001/api/users').subscribe((response) => {
  //     next: this.users = response;
  //     error: console.log(console.error());
  //   });
  // }
}
