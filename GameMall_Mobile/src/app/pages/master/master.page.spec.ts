import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterPage } from './master.page';

describe('MasterPage', () => {
  let component: MasterPage;
  let fixture: ComponentFixture<MasterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
