import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadoComponent } from './seleccionado.component';

describe('SeleccionadoComponent', () => {
  let component: SeleccionadoComponent;
  let fixture: ComponentFixture<SeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
