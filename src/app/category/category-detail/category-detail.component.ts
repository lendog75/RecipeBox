import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../../providers/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  id: string;

  constructor (private categorySvc: CategoryService,
               private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.categorySvc.getCategory(this.id).subscribe(x => {
        this.category = x;
      });
    });
  }

}
