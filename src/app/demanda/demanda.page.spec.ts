import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandaPage } from './demanda.page';

describe('DemandaPage', () => {
  let component: DemandaPage;
  let fixture: ComponentFixture<DemandaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
