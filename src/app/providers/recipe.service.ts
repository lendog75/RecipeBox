import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../recipe/recipe';
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

  getRecipesPerCategory(libKey: string): Observable<Recipe[]> {
    // get the keys for the categories
    const recipesPerCategory$ = this.db.list(`recipesPerCategory/${libKey}`);

    // map the returned list of keys
    // and get their details from the recipe node
    return recipesPerCategory$
      .map((RecipeKeys) => RecipeKeys
        .map( (recipeKey) => {
          return this.db.object(`recipes/${recipeKey.$key}`);
        }))
      .flatMap((res) => {
        return Observable.combineLatest(res);
      });
  }
}

