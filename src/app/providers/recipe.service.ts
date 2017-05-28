import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe/recipe';
import { Category } from '../shared/model/category';
import { FirebaseListFactoryOpts } from "angularfire2/interfaces";
import { RecipeDetail } from '../recipe/recipe-detail';


@Injectable()
export class RecipeService {

  constructor (private db: AngularFireDatabase) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.db.list('recipes')
      .map(Recipe.fromJsonList);
  }

  getRecipe(recipeId: any): Observable<Recipe> {
    return this.db.object('recipes/' + recipeId)
      .map(Recipe.fromJson);
  }

  getRecipeDetails(recipeId: any) {
    return this.db.object('recipeDetails/' + recipeId)
      .map(
        RecipeDetail.fromJson
      );

  }
}

