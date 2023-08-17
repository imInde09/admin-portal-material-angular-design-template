import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypesComponent } from './customer-types.component';

describe('CustomerTypesComponent', () => {
  let component: CustomerTypesComponent;
  let fixture: ComponentFixture<CustomerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
