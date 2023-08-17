import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingImportComponent } from './pricing-import.component';

describe('PricingImportComponent', () => {
  let component: PricingImportComponent;
  let fixture: ComponentFixture<PricingImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
