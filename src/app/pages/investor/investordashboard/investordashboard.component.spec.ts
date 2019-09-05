import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestordashboardComponent } from './investordashboard.component';

describe('InvestordashboardComponent', () => {
  let component: InvestordashboardComponent;
  let fixture: ComponentFixture<InvestordashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestordashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
