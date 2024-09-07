import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeValueNodeComponent } from './time-value-node.component';

describe('TimeValueNodeComponent', () => {
  let component: TimeValueNodeComponent;
  let fixture: ComponentFixture<TimeValueNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeValueNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeValueNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
