import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroLampadaPage } from './cadastro-lampada.page';

describe('CadastroLampadaPage', () => {
  let component: CadastroLampadaPage;
  let fixture: ComponentFixture<CadastroLampadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroLampadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
