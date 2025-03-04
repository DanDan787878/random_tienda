import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPedidoCComponent } from './envio-pedido-c.component';

describe('EnvioPedidoCComponent', () => {
  let component: EnvioPedidoCComponent;
  let fixture: ComponentFixture<EnvioPedidoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioPedidoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioPedidoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
