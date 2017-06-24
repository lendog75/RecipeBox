import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/providers/recipe.service';
import { Recipe } from '../../shared/model/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../../shared/model/recipe-detail';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeDetail: RecipeDetail;
  id: string;
  displayIngredients = true;
  constructor(private recipeSvc: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.route.snapshot.data['recipe'];

    this.recipeSvc.getRecipeDetails(this.recipe.$key).subscribe(x => {
      this.recipeDetail = x;
    });
  }

  toggleDisplayIngredients(displayOption) {
    if (displayOption) {
      this.displayIngredients = true;
    } else {
      this.displayIngredients = false;
    }
  }

  convertToStringArray(val: string): Array<string> {
    if (!val) { return new Array<string>(); }

    val = val.replace(/\n\n/g, '\n');
    return val.split('\n');
  }
}
