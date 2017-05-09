import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
  CanActivate, CanActivateChild, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';
import {IUser} from '../user/user';

@Injectable()
export  class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  currentUser;

  constructor(private authSvc: AuthService,
              private router: Router) {

    this.authSvc.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('In canActivate: ' + state.url + 'login status: ' + this.checkLoggedIn(state.url));
    return this.checkLoggedIn(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('In canActivateChild: ' + state.url);
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route): boolean {
    console.log('In canLoad: ' + route.path);
    return this.checkLoggedIn(route.path);
  }

  checkLoggedIn(url: string): boolean {

    if (this.currentUser) {
      return true;
    }

    // // Retain the attempted URL for redirection
    this.authSvc.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
