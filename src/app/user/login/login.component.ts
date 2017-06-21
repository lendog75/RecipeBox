import { Component } from '@angular/core';
import { AuthService } from '../../shared/providers/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login();
  }
}

