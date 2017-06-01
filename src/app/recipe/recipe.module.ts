import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import {PanelModule, TabViewModule, RatingModule} from 'primeng/primeng';
import { RecipeEditContainerComponent } from './recipe-edit-container/recipe-edit-container.component';
import { EditRecipeOtherComponent } from './edit-recipe-other/edit-recipe-other.component';
import { EditRecipeDirectionsComponent } from './edit-recipe-directions/edit-recipe-directions.component';
import { EditRecipeIngredientsComponent } from './edit-recipe-ingredients/edit-recipe-ingredients.component';

@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
    RecipeEditContainerComponent,
    EditRecipeOtherComponent,
    EditRecipeDirectionsComponent,
    EditRecipeIngredientsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    TabViewModule,
    RouterModule,
    PanelModule
  ],
  exports: [
    RecipeEditComponent,
    RecipeEditContainerComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
  ],
  providers: [
   // AuthService,
   // AngularFireDatabase,
  ],
})
export class RecipeModule { }
