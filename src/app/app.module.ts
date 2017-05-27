import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './providers/auth.service';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import {AngularFireModule} from 'angularfire2';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/auth-guard.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import {AccordionModule} from 'primeng/components/accordion/accordion';
import {RatingModule, ToolbarModule, ButtonModule,
  SplitButtonModule, MessagesModule, GrowlModule} from 'primeng/primeng';

import { SearchBoxComponent } from './search-box/search-box.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RecipeService } from './providers/recipe.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RecipeModule } from './recipe/recipe.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



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

  { path: '', component: HomeComponent, canActivate: [ AuthGuard ]  },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarTopComponent,
    UserDetailComponent,
    SearchBoxComponent,
    AppFooterComponent,
    NavbarMobileComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    MessagesModule,
    RecipeModule,
    BrowserAnimationsModule,

    AccordionModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    GrowlModule,
    RatingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AngularFireAuth,
    AngularFireDatabase,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
