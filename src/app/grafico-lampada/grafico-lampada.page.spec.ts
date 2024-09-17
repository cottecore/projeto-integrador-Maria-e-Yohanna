import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficoLampadaPage } from './grafico-lampada.page';

describe('GraficoLampadaPage', () => {
  let component: GraficoLampadaPage;
  let fixture: ComponentFixture<GraficoLampadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraficoLampadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
