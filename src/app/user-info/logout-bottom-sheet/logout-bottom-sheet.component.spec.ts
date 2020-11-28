import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBottomSheetComponent } from './logout-bottom-sheet.component';

describe('LogoutBottomSheetComponent', () => {
  let component: LogoutBottomSheetComponent;
  let fixture: ComponentFixture<LogoutBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
