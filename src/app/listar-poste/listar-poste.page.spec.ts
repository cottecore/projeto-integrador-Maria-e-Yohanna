import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPostePage } from './listar-poste.page';

describe('ListarPostePage', () => {
  let component: ListarPostePage;
  let fixture: ComponentFixture<ListarPostePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarPostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
