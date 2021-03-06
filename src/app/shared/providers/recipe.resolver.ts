import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeResolver implements Resolve<Observable<Recipe>> {

  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.recipeService.getRecipe(route.paramMap.get('id')).map( x => x).first();
  }
}
