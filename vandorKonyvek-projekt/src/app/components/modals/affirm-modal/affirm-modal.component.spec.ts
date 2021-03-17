import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmModalComponent } from './affirm-modal.component';

describe('AffirmModalComponent', () => {
  let component: AffirmModalComponent;
  let fixture: ComponentFixture<AffirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
