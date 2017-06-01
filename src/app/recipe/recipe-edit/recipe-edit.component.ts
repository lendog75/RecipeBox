import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../../providers/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { GrowlService, growlSeverity } from '../../providers/growl.service';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  @Input() id: string;


   public recipeForm: FormGroup;
   public submitted: boolean;
   recipe: Recipe;
   // id: string;
   isEdit: boolean;
   isLoading = true;

  constructor (private recipeSvc: RecipeService,
               private route: ActivatedRoute,
               private growlService: GrowlService,
               private _fb: FormBuilder) { }

  ngOnInit () {

    this.initForm();

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id && this.id !== '0') {
        this.isEdit = true;
        this.recipeSvc.getRecipe(this.id).subscribe(x => {
          this.recipe = x;
          console.log(this.recipe);
          this.loadForm(this.recipe);
        });
      }
    });
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
      rating: new FormControl('')
    });
    this.isLoading = false;
  }

  loadForm (recipe: Recipe) {
    this.recipeForm = new FormGroup({
      title: new FormControl(recipe.title),
      subTitle: new FormControl(recipe.subTitle),
      description: new FormControl(recipe.description),
      cookTime: new FormControl(recipe.cookTime),
      imagePath: new FormControl(recipe.imagePath),
      serves: new FormControl(recipe.serves),
      calories: new FormControl(recipe.calories),
      rating: new FormControl(recipe.rating)
    });
  }

  save (recipe: Recipe, isValid: boolean) {
    this.submitted = true; // set form submit to true

    if (this.isEdit) {
       this.recipe.key = this.id;
      this.recipe.title = recipe.title;
      this.recipe.subTitle = recipe.subTitle;
      this.recipe.description = recipe.description;
      this.recipe.cookTime = recipe.cookTime;
      this.recipe.imagePath = recipe.imagePath;
      this.recipe.serves = recipe.serves;
      this.recipe.calories = recipe.calories;
      this.recipe.rating = recipe.rating;
      this.recipeSvc.updateRecipe(this.recipe);
      this.growlService.add(growlSeverity.success, 'Update Complete', 'Recipe uppdated successully');
    } else {
      this.recipeSvc.createRecipe(recipe);
    }
  }
}
