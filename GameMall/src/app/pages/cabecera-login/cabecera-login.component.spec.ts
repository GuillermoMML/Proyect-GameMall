import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraLoginComponent } from './cabecera-login.component';

describe('CabeceraLoginComponent', () => {
  let component: CabeceraLoginComponent;
  let fixture: ComponentFixture<CabeceraLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
