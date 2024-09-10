import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConjuntoGraficoPage } from './conjunto-grafico.page';

describe('ConjuntoGraficoPage', () => {
  let component: ConjuntoGraficoPage;
  let fixture: ComponentFixture<ConjuntoGraficoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConjuntoGraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
