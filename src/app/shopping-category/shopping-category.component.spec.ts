import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCategoryComponent } from './shopping-category.component';

describe('ShoppingCategoryComponent', () => {
  let component: ShoppingCategoryComponent;
  let fixture: ComponentFixture<ShoppingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
