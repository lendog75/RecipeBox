import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../../shared/providers/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GrowlService, growlSeverity } from '../../shared/providers/growl.service';
import { Recipe } from '../../shared/model/recipe';
import { UploadService } from '../../shared/providers/upload.service';
import { Upload } from '../../shared/model/upload';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  @Input() id: string;
  public recipeForm: FormGroup;
  public submitted: boolean;
  selectedFiles: FileList;
  currentUpload: Upload;
  recipe: Recipe;
  isEdit: boolean;
  isLoading = true;

  constructor (private recipeSvc: RecipeService,
               private route: ActivatedRoute,
               private growlService: GrowlService,
               private _fb: FormBuilder,
               private router: Router,
               private upSvc: UploadService) { }

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
      rating: new FormControl(''),
      ingredients: new FormControl(''),
      directions: new FormControl(''),
      tips: new FormControl(''),
      equipment: new FormControl(''),
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
      rating: new FormControl(recipe.rating),
      ingredients: new FormControl(recipe.ingredients),
      directions: new FormControl(recipe.directions),
      tips: new FormControl(recipe.tips),
      equipment: new FormControl(recipe.equipment),
    });
  }

  detectFiles (event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle () {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.recipe.$key, this.currentUpload).subscribe(x => {
      this.recipe.imagePath = x.url;
      this.recipeForm.get('imagePath').patchValue(x.url);
    });

  }

  cancel () {
    this.growlService.add(growlSeverity.warn, 'Update canceled');
    this.router.navigate(['/recipes', this.recipe.$key]);
  }

  save (recipe: Recipe) {
    this.submitted = true; // set form submit to true

    if (this.isEdit) {
      this.recipeSvc.updateRecipe(this.recipe.$key, recipe);
      this.growlService.add(growlSeverity.success, 'Update Complete', 'Recipe uppdated successully');
    } else {
      this.recipeSvc.createRecipe(recipe);
    }
  }


}
