import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFromComponent } from './feedback-from.component';

describe('FeedbackFromComponent', () => {
  let component: FeedbackFromComponent;
  let fixture: ComponentFixture<FeedbackFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
