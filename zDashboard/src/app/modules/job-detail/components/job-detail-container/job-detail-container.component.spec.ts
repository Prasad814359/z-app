import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailContainerComponent } from './job-detail-container.component';

describe('JobDetailContainerComponent', () => {
  let component: JobDetailContainerComponent;
  let fixture: ComponentFixture<JobDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
