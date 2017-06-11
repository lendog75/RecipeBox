
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from '../shared/providers/auth-guard.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';


const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'categories/0/create', component: CategoryEditComponent, canActivate: [ AuthGuard ] },
  { path: 'categories/:id/edit', component: CategoryEditComponent, canActivate: [ AuthGuard ] },
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryRoutingModule { }
