import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe';
import { UserDetailService } from '../../shared/providers/user-detail.service';
@Component({
  selector: '[recipe-card]',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {

  }

}
