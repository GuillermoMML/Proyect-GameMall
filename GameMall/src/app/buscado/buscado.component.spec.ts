import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoComponent } from './buscado.component';

describe('BuscadoComponent', () => {
  let component: BuscadoComponent;
  let fixture: ComponentFixture<BuscadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
