import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../shared/model/category';
import { RecipesPerCategoryService } from '../../shared/providers/recipes-per-category.service';
import { CategoryService } from '../../shared/providers/category.service';
import { GrowlService, growlSeverity } from '../../shared/providers/growl.service';
import { Router } from '@angular/router';
import { Recipe } from '../../shared/model/recipe';

@Component({
  selector: 'edit-recipe-categories',
  templateUrl: './edit-recipe-categories.component.html',
  styleUrls: ['./edit-recipe-categories.component.scss']
})
export class EditRecipeCategoriesComponent implements OnInit {
 // @Input() recipeId: string;
  @Input() recipe: Recipe;
  categories: Category[];
selectedCategories: string[] = [];
  constructor (private categorySvc: CategoryService,
                private recipesPerCategoryService: RecipesPerCategoryService,
               private router: Router,
                private growlService: GrowlService) { }

  ngOnInit() {
    this.categorySvc.getCategories().subscribe(x => {
      this.categories = x;
    });

    this.loadSelectedCategories(this.recipe.categories);
  }

  loadSelectedCategories(recipeCats) {
   // this.selectedCategories = new Array<string>();
   // recipeCats.ToA.forEach(x => alert(x));
    this.selectedCategories = Object.keys(recipeCats);
console.log(Object.keys(recipeCats));


  }

  save(model: any) {
    if (model.length === 0) {
      this.recipesPerCategoryService.removeAll(this.recipe.$key);
    }

    this.recipesPerCategoryService.add(this.selectedCategories, this.recipe.$key);
  }

  cancel() {
    this.growlService.add(growlSeverity.warn, 'Update canceled');
    this.router.navigate(['/recipes', this.recipe.$key]);
  }
}
