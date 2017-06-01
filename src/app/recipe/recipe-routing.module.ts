
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../providers/auth-guard.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeResolver } from '../providers/recipe.resolver';


const routes: Routes = [
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    canActivate: [ AuthGuard ],
    resolve: {recipe: RecipeResolver}
  },
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
