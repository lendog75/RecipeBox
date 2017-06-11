import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../shared/providers/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private categorySvc: CategoryService) { }

  ngOnInit() {
     this.categories = this.categorySvc.getCategories();
  }

}
