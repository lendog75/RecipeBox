//import { Component, Input, OnInit } from '@angular/core';
//import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
//
//import { RecipeService } from '../../providers/recipe.service';
//import { RecipeDetail, Stuff, Tip } from '../../shared/model/recipe-detail';
//
//@Component({
//  selector: 'edit-recipe-other',
//  templateUrl: './edit-recipe-other.component.html',
//  styleUrls: ['./edit-recipe-other.component.scss']
//})
//export class EditRecipeOtherComponent implements OnInit {
//
//  @Input() recipeId: string;
//  public recipeDetailForm: FormGroup;
//  public recipeDetail: RecipeDetail;
//
//  constructor (private recipeSvc: RecipeService,
//               private fb: FormBuilder) { }
//
//  ngOnInit () {
//    this.recipeDetailForm = this.fb.group({
//      otherStuff: this.fb.array([]),
//      tips: this.fb.array([])
//    });
//
//    if (this.recipeId && this.recipeId !== '0') {
//      this.recipeSvc.getRecipeDetails(this.recipeId).subscribe(x => {
//        this.recipeDetail = x;
//
//        this.recipeDetail.tips.forEach(d => {
//          this.addTip(d);
//        });
//
//        this.recipeDetail.otherStuff.forEach(d => {
//          this.addItem(d);
//        });
//      });
//    }
//  }
//
//
//
//  removeListItem (list: FormArray, index) {
//    list.removeAt(index);
//  }
//
//
//
//  buildTip (tip: Tip) {
//    return this.fb.control({
//      value: [tip.value]
//    });
//  }
//
//  addTip (tip?: Tip) {
//    if (!tip) {
//      tip = new Tip();
//    }
//
//    const control =  <FormArray> this.recipeDetailForm.get('tips');
//    control.push(this.buildTip(tip));
//  }
//
//  buildItem (item: Stuff) {
//    return this.fb.control({
//      name: [item.name]
//    });
//  }
//
//  addItem (item?: Stuff) {
//    if (!item) {
//      item = new Stuff();
//    }
//
//    const control = <FormArray>this.recipeDetailForm.controls['otherStuff'];
//    control.push(this.buildItem(item));
//  }
//
//  save (form: FormGroup) {
//    this.recipeDetail.otherStuff = form.value.otherStuff;
//    this.recipeDetail.tips = form.value.tips;
//
//    console.log(this.recipeDetail);
//  }
//
//
//
//  getTips(form) {
//    return form.get('tips').controls;
//  }
//
//  getEquipment(form) {
//    return form.get('otherStuff').controls;
//  }
//}
