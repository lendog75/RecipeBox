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
import {AuthGuard} from './providers/auth-guard.service';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


import {AccordionModule} from 'primeng/components/accordion/accordion';
import {
  RatingModule, ToolbarModule, ButtonModule,
  SplitButtonModule, MessagesModule, GrowlModule, TabViewModule
} from 'primeng/primeng';

import { SearchBoxComponent } from './search-box/search-box.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RecipeService } from './providers/recipe.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RecipeModule } from './recipe/recipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService } from './providers/category.service';
import { CategoryModule } from './category/category.module';
import { GrowlService } from './providers/growl.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeAdminModule } from './recipe-admin/recipe-admin.module';
import { UserModule } from './user/user.module';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyALvORUnn9qzPp94-R1FdhfKace7gncuyk',
  authDomain: 'recipebox-53e3a.firebaseapp.com',
  databaseURL: 'https://recipebox-53e3a.firebaseio.com',
  projectId: 'recipebox-53e3a',
  storageBucket: 'recipebox-53e3a.appspot.com',
  messagingSenderId: '834602755675'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarTopComponent,
    SearchBoxComponent,
    AppFooterComponent,
    NavbarMobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MessagesModule,
    BrowserAnimationsModule,

    AccordionModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    GrowlModule,
    RatingModule,


    RecipeModule,
    RecipeAdminModule,
    CategoryModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AngularFireAuth,
    AngularFireDatabase,
    RecipeService,
    CategoryService,
    GrowlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
