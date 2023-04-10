import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compra2Component } from './compra2.component';

describe('Compra2Component', () => {
  let component: Compra2Component;
  let fixture: ComponentFixture<Compra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compra2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
