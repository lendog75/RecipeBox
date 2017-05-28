import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../providers/recipe.service';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../recipe-detail';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeDetail: RecipeDetail;
  id: string;
  constructor(private recipeSvc: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.recipeSvc.getRecipe(this.id).subscribe(x => {
        this.recipe = x;
        console.log(this.recipe);
      });

      this.recipeSvc.getRecipeDetails(this.id).subscribe(x => {
        console.log('ddd');
        this.recipeDetail = x;
        console.log(this.recipeDetail);
      });
    });
  }

}
