import { Component, OnInit } from '@angular/core';
import { GrowlService } from '../../shared/providers/growl.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'recipe-edit-container',
  templateUrl: './recipe-edit-container.component.html',
  styleUrls: ['./recipe-edit-container.component.scss']
})
export class RecipeEditContainerComponent implements OnInit {
  id: string;
  isEdit: boolean;
  displayedTab = 'details';

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id && this.id !== '0') {
        this.isEdit = true;
      }
    });
  }

  toggleDisplayedTab(tabOption) {
    this.displayedTab = tabOption;
  }

}
