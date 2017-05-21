import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../providers/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/model/recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  constructor(private recipeSvc: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeSvc.getRecipes();

    this.recipes.subscribe(r => {
      console.log(r);
    });
  }

}
