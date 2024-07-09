import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPostePage } from './cadastro-poste.page';

describe('CadastroPostePage', () => {
  let component: CadastroPostePage;
  let fixture: ComponentFixture<CadastroPostePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroPostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
