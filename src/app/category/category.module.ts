import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

  ],
  exports: [

  ],
  providers: [
  ],
})
export class CategoryModule { }
