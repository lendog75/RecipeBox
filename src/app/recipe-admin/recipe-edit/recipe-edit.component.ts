import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../../shared/providers/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GrowlService, growlSeverity } from '../../shared/providers/growl.service';
import { Recipe } from "../../shared/model/recipe";

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: Recipe;
   public recipeForm: FormGroup;
   public submitted: boolean;
   isEdit: boolean;
   isLoading = true;

  constructor (private recipeSvc: RecipeService,
               private growlService: GrowlService,
               private router: Router) { }

  ngOnInit () {
    this.initForm();
    if (this.recipe) {
      this.isEdit = true;
     this.loadForm(this.recipe);
    }
  }

  initForm () {
    this.recipeForm = new FormGroup({
      title: new FormControl(''),
      subTitle: new FormControl(''),
      description: new FormControl(''),
      cookTime: new FormControl(''),
      imagePath: new FormControl(''),
      serves: new FormControl(''),
      calories: new FormControl(''),
      rating: new FormControl(''),
      ingredients: new FormControl(''),
      directions: new FormControl(''),
      tips: new FormControl(''),
      equipment: new FormControl(''),
    });
    this.isLoading = false;
  }

  loadForm (recipe: Recipe) {
    this.recipeForm.patchValue({
      title: recipe.title,
      subTitle: recipe.subTitle,
      description: recipe.description,
      cookTime: recipe.cookTime,
      imagePath: recipe.imagePath,
      serves: recipe.serves,
      calories: recipe.calories,
      rating: recipe.rating,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      tips: recipe.tips,
      equipment: recipe.equipment
    });
  }

  save (recipe: Recipe, isValid: boolean) {
    this.submitted = true; // set form submit to true
    if (this.recipe) {
      this.recipeSvc.updateRecipe(this.recipe.$key, recipe);
      this.growlService.add(growlSeverity.success, 'Update Complete', 'Recipe uppdated successully');
    } else {
      this.recipeSvc.createRecipe(recipe);
    }
  }

  cancel() {
    this.growlService.add(growlSeverity.warn, 'Update canceled');
    this.router.navigate(['/recipes', this.recipe.$key]);
  }
}
