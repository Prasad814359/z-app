import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedToContainerComponent } from './assigned-to-container.component';

describe('AssignedToContainerComponent', () => {
  let component: AssignedToContainerComponent;
  let fixture: ComponentFixture<AssignedToContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedToContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedToContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
