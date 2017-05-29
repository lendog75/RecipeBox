import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../recipe/recipe';
import { RecipeDetail } from '../recipe/recipe-detail';

@Injectable()
export class RecipeService {

  recipes: FirebaseListObservable<Recipe[]>;
  recipeDetails: FirebaseListObservable<RecipeDetail[]>;

  constructor (private db: AngularFireDatabase) {
    this.recipes = db.list('/recipes');
    this.recipeDetails = db.list('/recipeDetails');
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


  createRecipe(recipe: Recipe) {
    console.log('create');
    this.recipes.push(recipe);

  }

  createRecipeDetails(recipeId: string, recipeDetail: RecipeDetail) {
    console.log('create');
    this.recipeDetails.push(recipeDetail);

  }

  updateRecipe(recipe: Recipe) {
    this.db.object('recipes/' + recipe.key).update(recipe);
  }

  updateRecipeDetails(recipeId: string, recipeDetails: RecipeDetail) {
    this.db.object('recipes/' + recipeId).update(recipeDetails);
  }
}

