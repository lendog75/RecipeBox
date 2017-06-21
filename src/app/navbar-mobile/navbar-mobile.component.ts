import { Component, OnInit } from '@angular/core';
import { Chef } from '../shared/model/chef';
import { AuthService } from '../shared/providers/auth.service';

@Component({
  selector: 'navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
  currentUser: Chef;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.authSvc.authState.subscribe(user => {
      this.currentUser = user;
    });
  }
}
