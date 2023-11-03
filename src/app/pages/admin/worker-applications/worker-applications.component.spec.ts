import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerApplicationsComponent } from './worker-applications.component';

describe('WorkerApplicationsComponent', () => {
  let component: WorkerApplicationsComponent;
  let fixture: ComponentFixture<WorkerApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerApplicationsComponent]
    });
    fixture = TestBed.createComponent(WorkerApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
