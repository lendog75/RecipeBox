import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';





@Injectable()
export class RecipesPerCategoryService {

  constructor (private db: AngularFireDatabase) {

  }

  //get(recipeId: string): Observable<any> {
  //
  //  return this.db.list('/recipesPerCategory', {
  //    query: {
  //      orderByValue: true,
  //
  //    }
  //  });
  //
  //}

  remove(key, recipeId) {
    const itemObservable = this.db.object('recipesPerCategory/' + key + '/' + recipeId)
    itemObservable.remove();
  }

  add(key, recipeId) {
    const itemObservable = this.db.object('/recipesPerCategory/' + key + '/' + recipeId);
    itemObservable.set(true);
  }
}

