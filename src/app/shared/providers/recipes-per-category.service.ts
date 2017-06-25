import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryService } from './category.service';
import { Category } from "app/shared/model/category";

@Injectable()
export class RecipesPerCategoryService {
  categories: Category[];




  constructor (private db: AngularFireDatabase,
                private categoryService: CategoryService) {
    categoryService.getCategories().subscribe(x => {
      this.categories = x;
    });
  }

  removeAll(recipeId) {
    this.categories.forEach(category => {
      this.remove(category.key, recipeId);
    });
  }

  remove(categoryId, recipeId) {
    const itemObservable = this.db.object('recipesPerCategory/' + categoryId + '/' + recipeId)
    itemObservable.remove();

    const recipeCategoriesObservable = this.db.object('/recipes/' + recipeId + '/categories/' + categoryId);
    recipeCategoriesObservable.remove();
  }

  add(categoryList: string[], recipeId) {
    this.removeAll(recipeId);
    categoryList.forEach(x => {
      this.addIndividual(x, recipeId);
    });
  }


  private addIndividual(categoryId, recipeId) {

   //this.removeAll(recipeId);

   //this.remove(categoryId, recipeId)

    const itemObservable = this.db.object('/recipesPerCategory/' + categoryId + '/' + recipeId);
    itemObservable.set(true);


    const recipeCategoriesObservable = this.db.object('/recipes/' + recipeId + '/categories/' + categoryId);
    recipeCategoriesObservable.set(true);


  }
}

