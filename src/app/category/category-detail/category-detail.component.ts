import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoryService } from '../../shared/providers/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  id: string;

  public path: string;

  constructor (private categorySvc: CategoryService,
               private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.path = `recipesPerCategory/${this.id}`;
      this.categorySvc.getCategory(this.id).subscribe(x => {
        this.category = x;
      });
    });
  }
}
