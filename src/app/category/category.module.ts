import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RecipeModule } from '../recipe/recipe.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
  CategoryEditComponent,
  CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RecipeModule

  ],
  exports: [

  ],
  providers: [
  ],
})
export class CategoryModule { }
