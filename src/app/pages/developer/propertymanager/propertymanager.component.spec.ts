import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertymanagerComponent } from './propertymanager.component';

describe('PropertymanagerComponent', () => {
  let component: PropertymanagerComponent;
  let fixture: ComponentFixture<PropertymanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertymanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
