import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPriceImportComponent } from './customer-price-import.component';

describe('CustomerPriceImportComponent', () => {
  let component: CustomerPriceImportComponent;
  let fixture: ComponentFixture<CustomerPriceImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPriceImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPriceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
