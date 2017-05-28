import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CategoryEditComponent } from './category-edit/category-edit.component';


@NgModule({
  declarations: [
  CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  exports: [

  ],
  providers: [
  ],
})
export class CategoryModule { }
