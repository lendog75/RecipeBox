import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    RouterModule
  ],
  exports: [
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
  ],
  providers: [
   // AuthService,
   // AngularFireDatabase,
   // RecipeService
  ],
  // bootstrap: [AppComponent]
})
export class RecipeModule { }
