import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAddNodeComponent } from './time-add-node.component';

describe('TimeAddNodeComponent', () => {
  let component: TimeAddNodeComponent;
  let fixture: ComponentFixture<TimeAddNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAddNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAddNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
