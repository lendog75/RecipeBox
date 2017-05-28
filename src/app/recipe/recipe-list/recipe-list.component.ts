import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../providers/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../providers/category.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input()
  set categoryId(id: string) {
    this.loadRecipes(id);
  }

  recipes: Observable<Recipe[]>;

  constructor(private recipeSvc: RecipeService,
              private categorySvc: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadRecipes(id);
    });
  }

  loadRecipes(id: string) {
    if (id) {
      this.recipes = this.recipeSvc.getRecipesPerCategory(id);
    }

  }
}
