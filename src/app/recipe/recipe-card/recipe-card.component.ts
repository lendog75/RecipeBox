import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe';
import {Rating} from 'primeng/primeng';
@Component({
  selector: '[recipe-card]',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
val: number = 6;
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
