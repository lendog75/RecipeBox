import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { IUser } from '../shared/model/user';
import { Router } from '@angular/router';
import { CategoryService } from '../providers/category.service';
import { Observable } from 'rxjs';
import { Category } from '../shared/model/category';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  currentUser: IUser;
  categories: Observable<Category[]>;
  categorySelect = '';
  constructor (private authSvc: AuthService,
               private router: Router,
               private categorySvc: CategoryService) {}

  ngOnInit () {
    this.authSvc.authState.subscribe(user => {
      this.currentUser = user;
    });

    this.categories = this.categorySvc.getCategories();
  }

  logout () {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }


  onSearchByCategory(form) {
    this.router.navigate(['/categories', form.categorySelect]);
  }
}
