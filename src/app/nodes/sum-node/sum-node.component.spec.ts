import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumNodeComponent } from './sum-node.component';

describe('SumNodeComponent', () => {
  let component: SumNodeComponent;
  let fixture: ComponentFixture<SumNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
