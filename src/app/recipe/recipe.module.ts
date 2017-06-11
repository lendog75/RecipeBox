
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {PanelModule, TabViewModule, RatingModule} from 'primeng/primeng';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    TabViewModule,
    RouterModule,
    PanelModule,
    RecipeRoutingModule,
    SharedModule
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCardComponent,
  ]
})
export class RecipeModule { }
