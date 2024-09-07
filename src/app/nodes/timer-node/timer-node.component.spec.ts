import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerNodeComponent } from './timer-node.component';

describe('TimerNodeComponent', () => {
  let component: TimerNodeComponent;
  let fixture: ComponentFixture<TimerNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
