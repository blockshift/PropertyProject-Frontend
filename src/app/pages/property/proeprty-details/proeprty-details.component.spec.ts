import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeprtyDetailsComponent } from './proeprty-details.component';

describe('ProeprtyDetailsComponent', () => {
  let component: ProeprtyDetailsComponent;
  let fixture: ComponentFixture<ProeprtyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProeprtyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProeprtyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
