import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../providers/recipe.service';
import { Direction, Ingredient, RecipeDetail, Stuff, Tip } from '../recipe-detail';

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
      ingredients: this.fb.array([]),
      directions: this.fb.array([]),
      otherStuff: this.fb.array([]),
      tips: this.fb.array([])
    });

    if (this.recipeId && this.recipeId !== '0') {
      this.recipeSvc.getRecipeDetails(this.recipeId).subscribe(x => {
        this.recipeDetail = x;

        this.recipeDetail.ingredients.forEach(i => {
          this.addIngredient(i);
        });

        this.recipeDetail.directions.forEach(d => {
          this.addDirection(d);
        });

        this.recipeDetail.tips.forEach(d => {
          this.addTip(d);
        });

        this.recipeDetail.otherStuff.forEach(d => {
          this.addItem(d);
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

  buildDirection (direction: Direction) {
    return this.fb.group({
      title: [direction.title],
      value: [direction.value]
    });
  }

  addDirection (direction?: Direction) {
    if (!direction) {
      direction = new Direction();
    }

    const control = <FormArray>this.recipeDetailForm.controls['directions'];
    control.push(this.buildDirection(direction));
  }

  buildTip (tip: Tip) {
    return this.fb.group({
      value: [tip.value]
    });
  }

  addTip (tip?: Tip) {
    if (!tip) {
      tip = new Tip();
    }

    const control = <FormArray>this.recipeDetailForm.controls['tips'];
    control.push(this.buildTip(tip));
  }

  buildItem (item: Stuff) {
    return this.fb.group({
      name: [item.name]
    });
  }

  addItem (item?: Stuff) {
    if (!item) {
      item = new Stuff();
    }

    const control = <FormArray>this.recipeDetailForm.controls['otherStuff'];
    control.push(this.buildItem(item));
  }




  save (form: FormGroup) {
    console.log(form.value);
  }
}
