import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalOpinionComponent } from './legal-opinion.component';

describe('LegalOpinionComponent', () => {
  let component: LegalOpinionComponent;
  let fixture: ComponentFixture<LegalOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
