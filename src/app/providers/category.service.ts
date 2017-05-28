import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

import { Category } from '../shared/model/category';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { RecipeDetail } from '../recipe/recipe-detail';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CategoryService {
 // Subject: Subject<any>;

  constructor (private db: AngularFireDatabase) {
  }

  getCategories(): Observable<Category[]> {
    return this.db.list('categories')
      .map(Category.fromJsonList);
  }

  //getRecipeIdsByCategory() :any {
  //  const subject = new Subject();
  //  const queryObservable = this.db.list('/recipesPerCategory', {
  //    query: {
  //      orderByChild: 'size',
  //      equalTo: 'large'
  //    }
  //  });
  //}
  //



  // getCategory(recipeId: any): Observable<Recipe> {
  //  return this.db.object('recipes/' + recipeId)
  //    .map(Recipe.fromJson);
  // }
}

