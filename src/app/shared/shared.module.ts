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
import { UserDetailService } from './providers/user-detail.service';
import { Chef } from './model/chef';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FavoriteComponent,
    MyRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule

  ],
  exports: [
    FavoriteComponent,
    MyRecipeComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    GrowlService,
    RecipeResolver,
    RecipeService,
    RecipesPerCategoryService,
    FavoriteService,
    UserDetailService
  ]
})
export class SharedModule { }
