import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from '../shared/providers/auth-guard.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: CategoryDetailComponent }
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
