import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../providers/auth.service';


@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) {}
  login() {
    this.authService.login();
    // Send them to the homepage if they are logged in

  }
}

