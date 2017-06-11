import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/providers/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../../shared/model/recipe';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../shared/providers/category.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input()
  set categoryId(id: string) {
    this.loadData(id);
  }

  recipes: Observable<Recipe[]>;


  constructor(private recipeSvc: RecipeService,
              private categorySvc: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadData(id);
    });
  }

  loadData(id: string) {
    if (id) {
      console.log('id:' + id);
      this.loadRecipes(id);
    }
  }

  loadRecipes(id: string) {
    this.recipes = this.recipeSvc.getRecipesPerCategory(id);
  }
}
