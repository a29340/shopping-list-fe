import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddModalComponent } from './list-add-modal.component';

describe('ListAddModalComponent', () => {
  let component: ListAddModalComponent;
  let fixture: ComponentFixture<ListAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
