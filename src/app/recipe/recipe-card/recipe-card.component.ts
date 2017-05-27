import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: '[recipe-card]',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
val: number = 6;
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
