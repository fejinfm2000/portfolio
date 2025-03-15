import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTemplateComponent } from './first-template.component';

describe('FirstTemplateComponent', () => {
  let component: FirstTemplateComponent;
  let fixture: ComponentFixture<FirstTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
