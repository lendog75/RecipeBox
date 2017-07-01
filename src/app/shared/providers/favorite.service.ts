import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Favorite } from '../model/favorite';
import { Observable } from 'rxjs';
import { UserDetailService } from './user-detail.service';

@Injectable()
export class FavoriteService {

  favorites: FirebaseListObservable<Favorite[]>;
  chefId: string;

  constructor (private db: AngularFireDatabase, private chefSvc: UserDetailService) {
    this.chefId = this.chefSvc.currentUserId;
    this.favorites = db.list('/favorites');
  }

  get (recipeId: string): Observable<any> {
    const path = `chefs/${this.chefId}/favorites/${recipeId}`;
    return this.db.object(path);
  }

  getAll (recipeId: string): Observable<any> {
    const path = `favorites/${recipeId}`;
    return this.db.object(path);
  }

  add (recipeId) {
    console.log('adding favorite');
    const chefFav = this.db.object(`chefs/${this.chefId}/favorites/${recipeId}`);
    chefFav.set(true);

    const fav = this.db.object(`favorites/${recipeId}/${this.chefId}`)
    fav.set(true);
  }

  remove (recipeId) {
    console.log('removing favorite');
    const chefFav = this.db.object(`chefs/${this.chefId}/favorites/${recipeId}`);
    chefFav.remove();

    const fav = this.db.object(`favorites/${recipeId}/${this.chefId}`)
    fav.remove();
  }
}
