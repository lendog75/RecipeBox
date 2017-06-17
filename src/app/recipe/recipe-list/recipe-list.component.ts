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
  @Input() header: string;

  @Input()
  set path(path: string) {
    this.loadRecipes(path);
  }

  recipes: Observable<Recipe[]>;

  constructor(private recipeSvc: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

  loadRecipes(path: string) {
    this.recipes = this.recipeSvc.getRecipesByRefPath(path);
  }
}
