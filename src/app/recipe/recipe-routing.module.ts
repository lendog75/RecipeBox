import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/providers/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeResolver } from '../shared/providers/recipe.resolver';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    resolve: {recipe: RecipeResolver}
  },
  { path: 'recipes', component: RecipeListComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeRoutingModule { }
