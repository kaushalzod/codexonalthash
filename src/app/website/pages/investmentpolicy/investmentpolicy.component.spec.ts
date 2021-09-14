import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentpolicyComponent } from './investmentpolicy.component';

describe('InvestmentpolicyComponent', () => {
  let component: InvestmentpolicyComponent;
  let fixture: ComponentFixture<InvestmentpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
