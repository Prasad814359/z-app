import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailLandingPageComponent } from './job-detail-landing-page.component';

describe('JobDetailLandingPageComponent', () => {
  let component: JobDetailLandingPageComponent;
  let fixture: ComponentFixture<JobDetailLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
