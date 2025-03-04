import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleCComponent } from './producto-detalle-c.component';

describe('ProductoDetalleCComponent', () => {
  let component: ProductoDetalleCComponent;
  let fixture: ComponentFixture<ProductoDetalleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetalleCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDetalleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
