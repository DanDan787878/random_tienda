import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAdComponent } from './productos-ad.component';

describe('ProductosAdComponent', () => {
  let component: ProductosAdComponent;
  let fixture: ComponentFixture<ProductosAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
