import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJuegoComponent } from './info-juego.component';

describe('InfoJuegoComponent', () => {
  let component: InfoJuegoComponent;
  let fixture: ComponentFixture<InfoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
