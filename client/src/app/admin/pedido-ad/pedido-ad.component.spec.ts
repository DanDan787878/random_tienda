import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAdComponent } from './pedido-ad.component';

describe('PedidoAdComponent', () => {
  let component: PedidoAdComponent;
  let fixture: ComponentFixture<PedidoAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
