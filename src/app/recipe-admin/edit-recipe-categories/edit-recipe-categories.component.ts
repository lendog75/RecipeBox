import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../shared/model/category';
import { RecipesPerCategoryService } from '../../shared/providers/recipes-per-category.service';
import { CategoryService } from '../../shared/providers/category.service';



@Component({
  selector: 'edit-recipe-categories',
  templateUrl: './edit-recipe-categories.component.html',
  styleUrls: ['./edit-recipe-categories.component.scss']
})
export class EditRecipeCategoriesComponent implements OnInit {
  @Input() recipeId: string;

  categories: Category[];
selectedCategories: string[] = [];
  constructor (private categorySvc: CategoryService, private recipesPerCategoryService: RecipesPerCategoryService) { }

  ngOnInit() {
    this.categorySvc.getCategories().subscribe(x => {
      this.categories = x;
    });
  }

  save(model: any) {
    console.log('insert recipeId: ' + this.recipeId + ' into fb.recipesPerCategory: ' + model);

    // remove from all categories, cold later enhance to remove from categories where not in
    this.categories.forEach(category => {
      this.recipesPerCategoryService.remove(category.key, this.recipeId);
    });

    model.forEach(category => {
      this.recipesPerCategoryService.add(category, this.recipeId);
    });
  }
}
