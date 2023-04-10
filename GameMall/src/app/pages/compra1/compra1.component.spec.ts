import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compra1Component } from './compra1.component';

describe('Compra1Component', () => {
  let component: Compra1Component;
  let fixture: ComponentFixture<Compra1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compra1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
