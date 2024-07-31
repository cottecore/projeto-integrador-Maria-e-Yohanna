import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagensPage } from './listagens.page';

describe('ListagensPage', () => {
  let component: ListagensPage;
  let fixture: ComponentFixture<ListagensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
