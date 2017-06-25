import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../../shared/providers/growl.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/providers/recipe.service';
import { Recipe } from '../../shared/model/recipe';


@Component({
  selector: 'recipe-edit-container',
  templateUrl: './recipe-edit-container.component.html',
  styleUrls: ['./recipe-edit-container.component.scss']
})
export class RecipeEditContainerComponent implements OnInit {
  //id: stringg; //remove
  recipe: Recipe;
  isEdit: boolean;
  displayedTab = 'details';

  constructor (private route: ActivatedRoute,
               private recipeSvc: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id && id !== '0') {
        this.isEdit = true;
        this.getRecipe(id);
      }
    });
  }

  getRecipe(recipeId: string) {
    this.recipeSvc.getRecipe(recipeId).subscribe(x => {
      this.recipe = x;
    });
  }

  toggleDisplayedTab(tabOption) {
    this.displayedTab = tabOption;
  }

}
