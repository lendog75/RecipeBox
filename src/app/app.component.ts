import { Component, OnInit } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentUser;

  constructor (private authSvc: AuthService) {}

  ngOnInit () {
    this.authSvc.user.subscribe(user => {
      this.currentUser = user;
    });
  }
}
