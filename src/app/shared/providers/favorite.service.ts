import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Favorite } from '../model/favorite';
import { Observable } from 'rxjs';
import { UserDetailService } from './user-detail.service';
import { map } from 'rxjs/operator/map';

@Injectable()
export class FavoriteService {

  favorites: FirebaseListObservable<Favorite[]>;

  constructor (private db: AngularFireDatabase, private chefSvc: UserDetailService) {

    this.favorites = db.list('/favorites');
  }

  get(recipeId: string): Observable<any> {
    const path = `chefs/${this.chefSvc.currentUserId}/favorites/${recipeId}`;
    console.log('checking fav status for: ' + path);
    return this.db.object(path);
  }

  add(recipeId) {
    console.log('adding favorite');
    const item = this.db.object(`chefs/${this.chefSvc.currentUserId}/favorites/${recipeId}`);
    item.set(true);
  }

  remove(recipeId) {
    console.log('removing favorite');
    const item = this.db.object(`chefs/${this.chefSvc.currentUserId}/favorites/${recipeId}`);
    item.remove();
  }
}
