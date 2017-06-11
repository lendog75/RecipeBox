
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    BrowserModule,

  ],
  exports: [
    FavoriteComponent
  ]
})
export class SharedModule { }
