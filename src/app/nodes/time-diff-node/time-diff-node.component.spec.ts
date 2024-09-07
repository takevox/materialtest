import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDiffNodeComponent } from './time-diff-node.component';

describe('TimeDiffNodeComponent', () => {
  let component: TimeDiffNodeComponent;
  let fixture: ComponentFixture<TimeDiffNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeDiffNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDiffNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
