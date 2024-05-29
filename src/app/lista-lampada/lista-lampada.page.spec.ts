import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaLampadaPage } from './lista-lampada.page';

describe('ListaLampadaPage', () => {
  let component: ListaLampadaPage;
  let fixture: ComponentFixture<ListaLampadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaLampadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
