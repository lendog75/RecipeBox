import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeCategoriesComponent } from './edit-recipe-categories.component';

describe('EditRecipeCategoriesComponent', () => {
  let component: EditRecipeCategoriesComponent;
  let fixture: ComponentFixture<EditRecipeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
