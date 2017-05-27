import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../providers/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/model/recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  constructor(private recipeSvc: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeSvc.getRecipes();

    //this.recipes.subscribe(r => {
    //  console.log(r);
    //});
    //
    // this.recipeSvc.getRecipe('581d03b827c7901ac094826c').subscribe(x => {
    //  console.log('single recipe:' + JSON.stringify(x));
    //});
    //
    //this.recipeSvc.getRecipesByCategory('Italian').subscribe(x => {
    //  console.log(x);
    //});
  }

}
