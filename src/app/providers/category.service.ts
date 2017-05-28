import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Category } from '../shared/model/category';

@Injectable()
export class CategoryService {

  constructor (private db: AngularFireDatabase) {
  }

  getCategories(): Observable<Category[]> {
    return this.db.list('categories')
      .map(Category.fromJsonList);
  }

  getCategory(categoryId: any): Observable<Category> {
    return this.db.object('categories/' + categoryId)
      .map(Category.fromJson);
  }
}

