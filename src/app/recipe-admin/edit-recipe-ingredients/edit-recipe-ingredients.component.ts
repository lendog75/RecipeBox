import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { RecipeService } from '../../providers/recipe.service';
import { Ingredient, RecipeDetail } from '../../shared/model/recipe-detail';

@Component({
  selector: 'edit-recipe-ingredients',
  templateUrl: './edit-recipe-ingredients.component.html',
  styleUrls: ['./edit-recipe-ingredients.component.scss']
})
export class EditRecipeIngredientsComponent implements OnInit {

  @Input() recipeId: string;
  public recipeDetailForm: FormGroup;
  public recipeDetail: RecipeDetail;

  constructor (private recipeSvc: RecipeService,
               private fb: FormBuilder) { }

  ngOnInit () {
    this.recipeDetailForm = this.fb.group({
      ingredients: this.fb.array([]),
    });

    if (this.recipeId && this.recipeId !== '0') {
      this.recipeSvc.getRecipeDetails(this.recipeId).subscribe(x => {
        this.recipeDetail = x;

        this.recipeDetail.ingredients.forEach(i => {
          this.addIngredient(i);
        });
      });
    }
  }

  buildIngredient (ingredient: Ingredient) {
    return this.fb.group({
      amount: [ingredient.amount],
      unit: [ingredient.unit],
      name: [ingredient.name]
    });
  }

  addIngredient (ingredient?: Ingredient) {
    if (!ingredient) {
      ingredient = new Ingredient();
    }

    const control = <FormArray>this.recipeDetailForm.controls['ingredients'];
    control.push(this.buildIngredient(ingredient));
  }

  removeListItem (list: FormArray, index) {
    list.removeAt(index);
  }

  save (form: FormGroup) {
    this.recipeDetail.ingredients = form.value.ingredients;

    console.log(this.recipeDetail);
  }
}
