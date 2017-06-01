import { Injectable } from '@angular/core';
import {
  AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable,
  FirebaseOperation
} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Category } from '../shared/model/category';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<Category[]>;

  constructor (private db: AngularFireDatabase) {
    this.categories = db.list('/categories');
  }

  getCategories(): Observable<Category[]> {
    return this.db.list('categories')
      .map(Category.fromJsonList);
  }

  getCategory(categoryId: any): Observable<Category> {
    return this.db.object('categories/' + categoryId)
      .map(Category.fromJson);
  }

  create(category: Category) {
    console.log('create');
    this.categories.push(category);
  }

  update(category: Category) {
    this.db.object('categories/' + category.key).update(category);
  }
}

