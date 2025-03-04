import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCComponent } from './carrito-c.component';

describe('CarritoCComponent', () => {
  let component: CarritoCComponent;
  let fixture: ComponentFixture<CarritoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
