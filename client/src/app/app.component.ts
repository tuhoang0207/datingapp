import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit ,Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  title = 'dating app';
  users: any; //declare variables

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUser();
  }

  getUser() { //declare function
    // debugger
    this.http.get('https://localhost:5001/api/users').subscribe((response) => {
      next: this.users = response;
      error: console.log(console.error());
    });
  }
}
