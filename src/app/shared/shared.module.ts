import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecipeService } from './providers/recipe.service';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth-guard.service';
import { CategoryService } from './providers/category.service';
import { GrowlService } from './providers/growl.service';
import { RecipeResolver } from './providers/recipe.resolver';
import { RecipesPerCategoryService } from './providers/recipes-per-category.service';
import { FavoriteService } from './providers/favorite.service';

@NgModule({
  declarations: [
    FavoriteComponent,

  ],
  imports: [
    BrowserModule,

  ],
  exports: [
    FavoriteComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    GrowlService,
    RecipeResolver,
    RecipeService,
    RecipesPerCategoryService,
    FavoriteService
  ]
})
export class SharedModule { }
