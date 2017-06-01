import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeOtherComponent } from './edit-recipe-other.component';

describe('EditRecipeOtherComponent', () => {
  let component: EditRecipeOtherComponent;
  let fixture: ComponentFixture<EditRecipeOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
