import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Direction, RecipeDetail } from '../recipe-detail';
import { RecipeService } from '../../providers/recipe.service';

@Component({
  selector: 'edit-recipe-directions',
  templateUrl: './edit-recipe-directions.component.html',
  styleUrls: ['./edit-recipe-directions.component.scss']
})
export class EditRecipeDirectionsComponent implements OnInit {
  @Input() recipeId: string;
  public recipeDetailForm: FormGroup;
  public recipeDetail: RecipeDetail;

  constructor (private recipeSvc: RecipeService,
               private fb: FormBuilder) { }

  ngOnInit() {
    this.recipeDetailForm = this.fb.group({
      directions: this.fb.array([])
    });

    if (this.recipeId && this.recipeId !== '0') {
      this.recipeSvc.getRecipeDetails(this.recipeId).subscribe(x => {
        this.recipeDetail = x;

        this.recipeDetail.directions.forEach(d => {
          this.addDirection(d);
        });
      });
    }
  }

  removeListItem (list: FormArray, index) {
    list.removeAt(index);
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

  save (form: FormGroup) {
    this.recipeDetail.directions = form.value.directions;

    console.log(this.recipeDetail);
  }
}
