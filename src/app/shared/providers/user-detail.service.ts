import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Favorite } from '../model/favorite';
import { Recipe } from '../model/recipe';
import { AuthService } from './auth.service';
import { Chef } from '../model/chef';

@Injectable()
export class UserDetailService {
  // public currentUser: IUser;
  public currentUserId: string;


  private chefDetail;
  private chefRef;


  constructor(private db: AngularFireDatabase, private authSvc: AuthService) {

    this.authSvc.authState.subscribe(chef => {
      this.currentUserId = chef.uid;
    });
  }

}
