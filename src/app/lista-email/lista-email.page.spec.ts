import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEmailPage } from './lista-email.page';

describe('ListaEmailPage', () => {
  let component: ListaEmailPage;
  let fixture: ComponentFixture<ListaEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
