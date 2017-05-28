import { Component, OnInit } from '@angular/core';
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

  recipes: Observable<Recipe[]>;

  constructor(private recipeSvc: RecipeService,
              private categorySvc: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.recipes = this.recipeSvc.getRecipesPerCategory(id);

    });
  }
}
