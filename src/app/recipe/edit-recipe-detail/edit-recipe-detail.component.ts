import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../providers/recipe.service';
import { Recipe } from '../recipe';
import { Ingredient, RecipeDetail } from '../recipe-detail';

@Component({
  selector: 'edit-recipe-detail',
  templateUrl: './edit-recipe-detail.component.html',
  styleUrls: ['./edit-recipe-detail.component.scss']
})
export class EditRecipeDetailComponent implements OnInit {
  @Input() recipeId: string;
  public recipeDetailForm: FormGroup;
  public recipeDetail: RecipeDetail;

  constructor (private recipeSvc: RecipeService,
               private fb: FormBuilder) { }

  ngOnInit () {
    this.recipeDetailForm = this.fb.group({
      ingredients: this.fb.array([])
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

  save (form: FormGroup) {
    console.log(form.value);
  }
}
