
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../providers/auth-guard.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


const routes: Routes = [
  // { path: 'recipes/:id/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ] },
  { path: 'recipes/:id', component: RecipeDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'recipes', component: RecipeListComponent, canActivate: [ AuthGuard ] },

];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeRoutingModule { }
