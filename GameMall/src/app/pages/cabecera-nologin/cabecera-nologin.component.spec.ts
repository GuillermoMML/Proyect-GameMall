import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraNologinComponent } from './cabecera-nologin.component';

describe('CabeceraNologinComponent', () => {
  let component: CabeceraNologinComponent;
  let fixture: ComponentFixture<CabeceraNologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraNologinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraNologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
