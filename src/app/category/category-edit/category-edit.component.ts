import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Category } from '../../shared/model/category';
import { CategoryService } from '../../shared/providers/category.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  public catForm: FormGroup;
  public submitted: boolean;
  category: Category;
  id: string;
  isEdit: boolean;
  isLoading: boolean = true;

  constructor(private categorySvc: CategoryService,
              private route: ActivatedRoute,
              private _fb: FormBuilder) { }

  ngOnInit() {

    this.initForm();

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id && this.id !== '0') {
        this.isEdit = true;
        this.categorySvc.getCategory(this.id).subscribe(x => {
          this.category = x;
          console.log(this.category);
          this.loadForm(this.category);
        });
      }
    });
  }


  initForm() {
    this.catForm = new FormGroup({
      title: new FormControl(''),
      shortTitle: new FormControl(''),
      description: new FormControl('')
    });
    this.isLoading = false;
  }

  loadForm(category: Category) {
    this.catForm = new FormGroup({
      title: new FormControl(category.title),
      shortTitle: new FormControl(category.shortTitle),
      description: new FormControl(category.description)
    });
  }

  save(category: Category, isValid: boolean) {
    this.submitted = true; // set form submit to true

    if (this.isEdit) {
      this.category.key = this.id;
      this.category.description = category.description;
      this.category.title = category.title;
      this.category.shortTitle = category.shortTitle;
      this.categorySvc.update(this.category);
    } else {
      this.categorySvc.create(category);
    }
  }
}
