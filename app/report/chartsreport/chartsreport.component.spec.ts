import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsreportComponent } from './chartsreport.component';

describe('ChartsreportComponent', () => {
  let component: ChartsreportComponent;
  let fixture: ComponentFixture<ChartsreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
