import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { IUser } from '../shared/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  currentUser: IUser;

  constructor (private authSvc: AuthService,
               private router: Router) {}

  ngOnInit () {
    this.authSvc.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout () {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}
