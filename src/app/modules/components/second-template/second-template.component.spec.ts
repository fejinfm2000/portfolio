import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTemplateComponent } from './second-template.component';

describe('SecondTemplateComponent', () => {
  let component: SecondTemplateComponent;
  let fixture: ComponentFixture<SecondTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
