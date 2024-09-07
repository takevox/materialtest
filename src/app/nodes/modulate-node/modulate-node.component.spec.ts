import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulateNodeComponent } from './modulate-node.component';

describe('ModulateNodeComponent', () => {
  let component: ModulateNodeComponent;
  let fixture: ComponentFixture<ModulateNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulateNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulateNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
