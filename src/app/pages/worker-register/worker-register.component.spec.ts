import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRegisterComponent } from './worker-register.component';

describe('WorkerRegisterComponent', () => {
  let component: WorkerRegisterComponent;
  let fixture: ComponentFixture<WorkerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerRegisterComponent]
    });
    fixture = TestBed.createComponent(WorkerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
