import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNodeComponent } from './counter-node.component';

describe('CounterNodeComponent', () => {
  let component: CounterNodeComponent;
  let fixture: ComponentFixture<CounterNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
