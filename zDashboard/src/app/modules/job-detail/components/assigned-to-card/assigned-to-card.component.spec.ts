import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedToCardComponent } from './assigned-to-card.component';

describe('AssignedToCardComponent', () => {
  let component: AssignedToCardComponent;
  let fixture: ComponentFixture<AssignedToCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedToCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedToCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
