import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {AuthService} from './providers/auth.service';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import {AuthGuard} from './providers/auth-guard.service';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyALvORUnn9qzPp94-R1FdhfKace7gncuyk',
  authDomain: 'recipebox-53e3a.firebaseapp.com',
  databaseURL: 'https://recipebox-53e3a.firebaseio.com',
  projectId: 'recipebox-53e3a',
  storageBucket: 'recipebox-53e3a.appspot.com',
  messagingSenderId: '834602755675'
};

const routes: Routes = [

  { path: 'user/detail', component: UserDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'recipes/:id/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ] },
  { path: 'recipes/:id', component: RecipeDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'recipes', component: RecipeListComponent, canActivate: [ AuthGuard ] },

  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent }



];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDetailComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
