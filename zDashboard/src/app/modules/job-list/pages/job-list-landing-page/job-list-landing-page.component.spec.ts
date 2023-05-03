import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListLandingPageComponent } from './job-list-landing-page.component';

describe('JobListLandingPageComponent', () => {
  let component: JobListLandingPageComponent;
  let fixture: ComponentFixture<JobListLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
