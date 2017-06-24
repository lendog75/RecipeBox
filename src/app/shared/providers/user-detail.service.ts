import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Injectable()
export class UserDetailService {
  public currentUserId: string;
  private chefDetail;
  private chefRef;

  constructor (private db: AngularFireDatabase, private authSvc: AuthService) {
    this.authSvc.authState.subscribe(chef => {
      if (chef) {
        this.currentUserId = chef.uid;
      } else {
        this.currentUserId = null;
      }
    });
  }


  isMyRecipe (recipeId: string): any {

    const path = `chefs/${this.currentUserId}/my-recipes/${recipeId}`;
    console.log(path);
    return this.db.object(path);
  }
}
