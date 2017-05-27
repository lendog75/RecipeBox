import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe/recipe';
import { Category } from '../shared/model/category';
import { FirebaseListFactoryOpts } from "angularfire2/interfaces";


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


   //getRecipesByCategory(category: string): Observable<Category> {
   //  let xxx = this.db.object('category/' + category)
   //   .map(x => x.recipes.push(this.getRecipe(x))
   //     //Category.fromJson
   //   );
   //
   //
   // return xxx;
   //}

  //findCategoryByUrl(categoryUrl: string): Observable<Category> {
  //  return this.db.list('category', {
  //    query: {
  //      orderByChild: 'url',
  //      equalTo: categoryUrl
  //    }
  //  })
  //    .map(results => results[0]);
  //}

  //findRecipeKeysPerCategoryUrl(categoryUrl: string,
  //                           query: FirebaseListFactoryOpts = {}): Observable<string[]> {
  //  return this.findCategoryByUrl(categoryUrl)
  //    .do(val => console.log('category', val))
  //    .filter(category => !!category)
  //    .switchMap(category => this.db.list(`recipesPerCategory/${category.$key}`, query))
  //    .map( lspc => lspc.map(lpc => lpc.$key) );
  //}

  //findRecipesForRecipeKeys(recipeKeys$: Observable<string[]>): Observable<Recipe[]> {
  //  return recipeKeys$
  //    .map(lspc => lspc.map(recipeKey => this.db.object('recipes/' + recipeKey)) )
  //    .flatMap(fbojs => Observable.combineLatest(fbojs));
  //}

  //findAllRecipesForCategory(categoryUrl: string): Observable<Recipe[]> {
  //  return this.findRecipesForRecipeKeys(this.findRecipeKeysPerCategoryUrl(categoryUrl));
  //}
}

