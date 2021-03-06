import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Chef } from '../model/chef';
import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authState: BehaviorSubject<Chef> = new BehaviorSubject<Chef>(null);
  redirectUrl: string;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.getUser();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        x => {
          this.authState.next(x.user);
          localStorage.setItem('user', JSON.stringify(x.user));
          this.router.navigateByUrl('');
        }
      );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authState.next(null);
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  getUser() {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      const chef: Chef = Chef.fromJson(user);
      this.authState.next(chef);
    } else {
      this.authState.next(null);
    }
  }
}

