import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperdetailsComponent } from './developerdetails.component';

describe('DeveloperdetailsComponent', () => {
  let component: DeveloperdetailsComponent;
  let fixture: ComponentFixture<DeveloperdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
