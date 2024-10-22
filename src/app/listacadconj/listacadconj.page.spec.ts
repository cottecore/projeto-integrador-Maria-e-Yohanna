import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacadconjPage } from './listacadconj.page';

describe('ListacadconjPage', () => {
  let component: ListacadconjPage;
  let fixture: ComponentFixture<ListacadconjPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListacadconjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
