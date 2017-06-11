import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/providers/auth.service';


@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) {}
  login() {
    this.authService.login();
  }
}

