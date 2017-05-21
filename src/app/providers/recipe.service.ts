import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/model/recipe';


@Injectable()
export class RecipeService {

  constructor(private db: AngularFireDatabase) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.db.list('recipes')
      .do(console.log)
      .map(Recipe.fromJsonList);
  }
}

