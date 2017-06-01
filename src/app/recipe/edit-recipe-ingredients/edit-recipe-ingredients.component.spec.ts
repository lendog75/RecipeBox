import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeIngredientsComponent } from './edit-recipe-ingredients.component';

describe('EditRecipeIngredientsComponent', () => {
  let component: EditRecipeIngredientsComponent;
  let fixture: ComponentFixture<EditRecipeIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
