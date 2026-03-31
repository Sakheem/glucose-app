import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseDashboard } from './glucose-dashboard';

describe('GlucoseDashboard', () => {
  let component: GlucoseDashboard;
  let fixture: ComponentFixture<GlucoseDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlucoseDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(GlucoseDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
