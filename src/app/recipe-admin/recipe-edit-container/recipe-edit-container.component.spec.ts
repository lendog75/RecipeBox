import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditContainerComponent } from './recipe-edit-container.component';

describe('RecipeEditContainerComponent', () => {
  let component: RecipeEditContainerComponent;
  let fixture: ComponentFixture<RecipeEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
