import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PanelModule, TabViewModule, RatingModule, CheckboxModule } from 'primeng/primeng';
import { RecipeAdminRoutingModule } from './recipe-admin-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeEditContainerComponent } from './recipe-edit-container/recipe-edit-container.component';

//import { EditRecipeOtherComponent } from './edit-recipe-other/edit-recipe-other.component';
//import { EditRecipeDirectionsComponent } from './edit-recipe-directions/edit-recipe-directions.component';
//import { EditRecipeIngredientsComponent } from './edit-recipe-ingredients/edit-recipe-ingredients.component';
//import { EditRecipeCategoriesComponent } from './edit-recipe-categories/edit-recipe-categories.component';


@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeEditContainerComponent,
    //EditRecipeOtherComponent,
    //EditRecipeDirectionsComponent,
    //EditRecipeIngredientsComponent,
    //EditRecipeCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    TabViewModule,
    RouterModule,
    PanelModule,
    RecipeAdminRoutingModule,
    CheckboxModule
  ],
  exports: [
    RecipeEditComponent,
    RecipeEditContainerComponent,
  ]
})
export class RecipeAdminModule { }
