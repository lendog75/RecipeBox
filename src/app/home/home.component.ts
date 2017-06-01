import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../providers/category.service';
import { Category } from '../shared/model/category';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category: Category;
  categoryId = '-KlKFkGJ0nxZDlK7Xtpe';

  constructor (private categorySvc: CategoryService) { }

  ngOnInit () {
    this.categorySvc.getCategory(this.categoryId).subscribe(x => {
      this.category = x;
    });
  }

}
