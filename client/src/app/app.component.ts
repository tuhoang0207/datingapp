import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit ,Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dating app';
  user: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // debugger
    this.http.get('https://localhost:5001/api/users').subscribe((response) => {
      next: this.user = response;
      error: console.log(console.error());
    });
  }
}
