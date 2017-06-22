import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../model/recipe';
import { RecipeDetail } from '../model/recipe-detail';
import { Router } from "@angular/router";

@Injectable()
export class RecipeService {

  recipes: FirebaseListObservable<Recipe[]>;
  recipeDetails: FirebaseListObservable<RecipeDetail[]>;

  constructor (private db: AngularFireDatabase,
               private router: Router) {
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

  getRecipesByRefPath(path) {
    console.log('getting recipes referenced in path: ' + path);
    // get the keys for path
    const ref$ = this.db.list(path);

    // map the returned list of keys
    // and get their details from the recipe node
    return ref$
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
    const recipeResponse = this.recipes.push(recipe);
    this.router.navigate(['/recipes', recipeResponse.key, 'edit']);
  }

  createRecipeDetails(recipeId: string, recipeDetail: RecipeDetail) {
    console.log('create');
    this.recipeDetails.push(recipeDetail);
  }

  updateRecipe(recipeId: string, recipe: Recipe) {
    this.db.object('recipes/' + recipeId).update(recipe);
  }

  updateRecipeDetails(recipeId: string, recipeDetails: RecipeDetail) {
    this.db.object('recipes/' + recipeId).update(recipeDetails);
  }
}

