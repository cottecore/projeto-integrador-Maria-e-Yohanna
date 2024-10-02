import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComentarioPage } from './cadastro-comentario.page';

describe('CadastroComentarioPage', () => {
  let component: CadastroComentarioPage;
  let fixture: ComponentFixture<CadastroComentarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
