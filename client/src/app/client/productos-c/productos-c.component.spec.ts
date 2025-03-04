import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCComponent } from './productos-c.component';

describe('ProductosCComponent', () => {
  let component: ProductosCComponent;
  let fixture: ComponentFixture<ProductosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
