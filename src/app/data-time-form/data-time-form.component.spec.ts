import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTimeFormComponent } from './data-time-form.component';

describe('DataTimeFormComponent', () => {
  let component: DataTimeFormComponent;
  let fixture: ComponentFixture<DataTimeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTimeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
