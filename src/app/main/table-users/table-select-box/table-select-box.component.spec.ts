import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectBoxComponent } from './table-select-box.component';

describe('TableSelectBoxComponent', () => {
  let component: TableSelectBoxComponent;
  let fixture: ComponentFixture<TableSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
