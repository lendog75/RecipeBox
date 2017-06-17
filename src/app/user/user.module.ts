import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RecipeModule } from '../recipe/recipe.module';


@NgModule({
  declarations: [
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    UserRoutingModule,
    RecipeModule
  ],
  exports: [
    UserDetailComponent,
    LoginComponent
  ]
})
export class UserModule {
}
