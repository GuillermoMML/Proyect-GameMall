import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutenticationPage } from './autentication.page';

describe('AutenticationPage', () => {
  let component: AutenticationPage;
  let fixture: ComponentFixture<AutenticationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutenticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
