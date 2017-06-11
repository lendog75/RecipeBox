import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GrowlService } from '../../shared/providers/growl.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/providers/recipe.service';

@Component({
  selector: 'recipe-edit-container',
  templateUrl: './recipe-edit-container.component.html',
  styleUrls: ['./recipe-edit-container.component.scss']
})
export class RecipeEditContainerComponent implements OnInit {
  id: string;
  isEdit: boolean;

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id && this.id !== '0') {
        this.isEdit = true;
      }
    });
  }
}
