import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './providers/auth.service';
import {IUser} from './user/user';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public isLoggedIn: boolean;

  user: IUser;

  currentUser: BehaviorSubject<IUser>;


  constructor(public authService: AuthService, private router: Router) {
    // this.currentUser = null;
    this.currentUser =  this.authService.currentUser;

    this.currentUser.subscribe(usr => {
        this.user = usr;
      }
    );

   // this.getUser();
  }

  // getUser() {
  //  this.currentUser.subscribe(usr => {
  //       this.user = usr;
  //       this.isLoggedIn = this.authService.isLoggedIn();
  //     }
  //   );
  // }

  logout() {
    this.authService.logout();
  }
}
