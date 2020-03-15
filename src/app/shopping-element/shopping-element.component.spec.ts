import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingElementComponent } from './shopping-element.component';

describe('ShoppingElementComponent', () => {
  let component: ShoppingElementComponent;
  let fixture: ComponentFixture<ShoppingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
