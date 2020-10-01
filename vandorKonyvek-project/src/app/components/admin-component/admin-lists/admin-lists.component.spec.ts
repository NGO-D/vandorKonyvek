import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListsComponent } from './admin-lists.component';

describe('AdminListsComponent', () => {
  let component: AdminListsComponent;
  let fixture: ComponentFixture<AdminListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
