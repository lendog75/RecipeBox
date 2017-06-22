import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../../shared/providers/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { GrowlService, growlSeverity } from '../../shared/providers/growl.service';
import { Recipe } from "../../shared/model/recipe";

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
      this.recipeSvc.updateRecipe(this.recipe.$key, recipe);
      this.growlService.add(growlSeverity.success, 'Update Complete', 'Recipe uppdated successully');
    } else {
      this.recipeSvc.createRecipe(recipe);
    }
  }
}
