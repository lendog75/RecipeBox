import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeDetailComponent } from './edit-recipe-detail.component';

describe('EditRecipeDetailComponent', () => {
  let component: EditRecipeDetailComponent;
  let fixture: ComponentFixture<EditRecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
