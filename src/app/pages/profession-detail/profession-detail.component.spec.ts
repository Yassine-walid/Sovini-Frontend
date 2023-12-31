import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionDetailComponent } from './profession-detail.component';

describe('ProfessionDetailComponent', () => {
  let component: ProfessionDetailComponent;
  let fixture: ComponentFixture<ProfessionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionDetailComponent]
    });
    fixture = TestBed.createComponent(ProfessionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
