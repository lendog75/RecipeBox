import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe';
import { UserDetailService } from '../../shared/providers/user-detail.service';
import { Observable } from 'rxjs';
import { FavoriteService } from '../../shared/providers/favorite.service';
@Component({
  selector: '[recipe-card]',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;
  favCount: number = 0 ;

  constructor(private favoriteSvc: FavoriteService) { }

  ngOnInit() {


    // get total fav count
    this.getFavCount();
  }

  getFavCount() {
    this.favoriteSvc.getAll(this.recipe.$key)
      .subscribe(x => {
        if (x.$value !== null) {
          console.log('xxx ' + Object.keys(x).length);

          this.favCount = Object.keys(x).length;
        } else {
          this.favCount = 0;
        }
      });
  }

}
