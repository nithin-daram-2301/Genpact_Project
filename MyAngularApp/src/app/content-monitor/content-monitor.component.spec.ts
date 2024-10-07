import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMonitorComponent } from './content-monitor.component';

describe('ContentMonitorComponent', () => {
  let component: ContentMonitorComponent;
  let fixture: ComponentFixture<ContentMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentMonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
