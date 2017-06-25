import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from '../shared/providers/auth-guard.service';
import { RecipeEditContainerComponent } from './recipe-edit-container/recipe-edit-container.component';

const routes: Routes = [
  { path: 'recipes/0/create',
    component: RecipeEditContainerComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'recipes/:id/edit',
    component: RecipeEditContainerComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeAdminRoutingModule { }
