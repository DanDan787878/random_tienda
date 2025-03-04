import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCComponent } from './producto-c.component';

describe('ProductoCComponent', () => {
  let component: ProductoCComponent;
  let fixture: ComponentFixture<ProductoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
