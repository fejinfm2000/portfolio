import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTemplateComponent } from './fourth-template.component';

describe('FourthTemplateComponent', () => {
  let component: FourthTemplateComponent;
  let fixture: ComponentFixture<FourthTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
