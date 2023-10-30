import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredCarouselComponent } from './sponsored-carousel.component';

describe('SponsoredCarouselComponent', () => {
  let component: SponsoredCarouselComponent;
  let fixture: ComponentFixture<SponsoredCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsoredCarouselComponent]
    });
    fixture = TestBed.createComponent(SponsoredCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
