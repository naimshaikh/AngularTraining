import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesreportComponent } from './tablesreport.component';

describe('TablesreportComponent', () => {
  let component: TablesreportComponent;
  let fixture: ComponentFixture<TablesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
