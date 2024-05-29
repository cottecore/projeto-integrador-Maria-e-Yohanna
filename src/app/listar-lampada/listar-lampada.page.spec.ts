import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarLampadaPage } from './listar-lampada.page';

describe('ListarLampadaPage', () => {
  let component: ListarLampadaPage;
  let fixture: ComponentFixture<ListarLampadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarLampadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
