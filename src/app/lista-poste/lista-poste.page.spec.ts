import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPostePage } from './lista-poste.page';

describe('ListaPostePage', () => {
  let component: ListaPostePage;
  let fixture: ComponentFixture<ListaPostePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaPostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
