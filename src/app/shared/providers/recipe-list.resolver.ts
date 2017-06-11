//import { Injectable } from '@angular/core';
//import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
//import { RecipeService } from './recipe.service';
//import { Recipe } from '../shared/model/recipe';
//import { Observable } from 'rxjs/observable';
//
//@Injectable()
//export class RecipeListResolver implements Resolve<Observable<Recipe[]>> {
//
//  constructor(private recipeService: RecipeService) {}
//
//  resolve(route: ActivatedRouteSnapshot) {
//    return this.recipeService.getRecipesPerCategory(route.paramMap.get('id')).map( x => x).first();
//  }
//}
