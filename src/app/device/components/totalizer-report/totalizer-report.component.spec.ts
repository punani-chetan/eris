import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizerReportComponent } from './totalizer-report.component';

describe('TotalizerReportComponent', () => {
  let component: TotalizerReportComponent;
  let fixture: ComponentFixture<TotalizerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalizerReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalizerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
