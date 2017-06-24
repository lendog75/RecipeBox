import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { UserDetailService } from '../providers/user-detail.service';

@Component({
  selector: 'my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.scss']
})
export class MyRecipeComponent implements OnInit {
  @Input() recipeId: string;
  isMine: boolean;

  constructor (private chefService: UserDetailService) { }

  ngOnInit () {
    this.isMine = false;
    this.chefService.isMyRecipe(this.recipeId).subscribe(x => {
      if (x.$exists()) {
        this.isMine = true;
      }
    });
  }
}
