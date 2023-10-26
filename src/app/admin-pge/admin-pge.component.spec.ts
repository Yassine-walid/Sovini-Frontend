import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPgeComponent } from './admin-pge.component';

describe('AdminPgeComponent', () => {
  let component: AdminPgeComponent;
  let fixture: ComponentFixture<AdminPgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPgeComponent]
    });
    fixture = TestBed.createComponent(AdminPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
