import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {IUser} from '../user/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  redirectUrl: string;


  constructor(public firebase: AngularFire, private router: Router) {
     this.firebase.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
        } else {
          console.log('Successfully Logged in.');

          const user = {
            displayName: auth.auth.displayName
          };

          this.currentUser.next(user);
        }
      }
    );
  }

  getUser(): BehaviorSubject<IUser> {
    return this.currentUser;
  }

  login() {
    this.loginWithGoogle();
  }

  loginWithGoogle() {
    return this.firebase.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

   // Logs out the current user
  logout() {
    this.firebase.auth.logout();
    this.currentUser.next(null);
    this.router.navigate(['/login']);
  }

  // isLoggedIn(): boolean {
  //   if()
  //  console.log('login: 't his.firebase.auth.getAuth());
  //   return this.currentUser.value ? true : false;
  // }
}
