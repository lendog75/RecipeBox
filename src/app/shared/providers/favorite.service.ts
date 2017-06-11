import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Favorite } from '../model/favorite';
import { Observable } from 'rxjs';

@Injectable()
export class FavoriteService {

  favorites: FirebaseListObservable<Favorite[]>;

  constructor (private db: AngularFireDatabase) {

    this.favorites = db.list('/favorites');
  }

  get(recipeId: any): Observable<Favorite> {
    return this.db.object('favorites/' + recipeId)
      .map(Favorite.fromJson);
  }


  add(recipeId, chefId) {
    console.log('adding favorite');
    const favorite: Favorite = new Favorite(recipeId,  chefId);
    this.db.object('favorites/' + recipeId).update(favorite);
  }

  remove(recipeId, chefId) {
    console.log('removing favorite')
    const itemObservable = this.db.object('favorites/' + recipeId)
    itemObservable.remove();
  }




}
