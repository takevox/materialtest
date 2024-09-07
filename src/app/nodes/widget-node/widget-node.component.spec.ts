import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNodeComponent } from './widget-node.component';

describe('WidgetNodeComponent', () => {
  let component: WidgetNodeComponent;
  let fixture: ComponentFixture<WidgetNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
