import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RecipeModule } from '../recipe/recipe.module';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [
    CategoryEditComponent,
    CategoryDetailComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RecipeModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryListComponent
  ],
  providers: [],
})
export class CategoryModule {
}
