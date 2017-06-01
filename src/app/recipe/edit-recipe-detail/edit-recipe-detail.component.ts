import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private recipeSvc: RecipeService,
              private _fb: FormBuilder) { }

  ngOnInit() {
      if (this.recipeId && this.recipeId !== '0') {
        this.recipeSvc.getRecipeDetails(this.recipeId).subscribe(x => {
          this.recipeDetail = x;

          this.recipeDetail.ingredients.forEach(i => {
            this.addIngredientx(i);
          });
        });
      }

    this.recipeDetailForm = this._fb.group({
      ingredients: this._fb.array([
        //this.initIngredient(),
      ])
    });
  }

  initIngredient() {
    return this._fb.group({
      amount: [''],
      unit: [''],
      name: ['']
    });
  }

  addIngredient() {
    const control = <FormArray>this.recipeDetailForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  initIngredientx(ingredient: Ingredient) {
    return this._fb.group({
      amount: [ingredient.amount],
      unit: [ingredient.unit],
      name: [ingredient.name]
    });
  }

  addIngredientx(ingredient: Ingredient) {
    const control = <FormArray>this.recipeDetailForm.controls['ingredients'];
    control.push(this.initIngredientx(ingredient));
  }

  save(xxx: FormGroup) {
    console.log(xxx.value);

  }


}
