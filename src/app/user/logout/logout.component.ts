import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/providers/auth.service';
import { Router } from '@angular/router';

@Component({ template: '' })
export class LogoutComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}
