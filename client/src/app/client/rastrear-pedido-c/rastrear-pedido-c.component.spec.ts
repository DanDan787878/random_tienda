import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrearPedidoCComponent } from './rastrear-pedido-c.component';

describe('RastrearPedidoCComponent', () => {
  let component: RastrearPedidoCComponent;
  let fixture: ComponentFixture<RastrearPedidoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastrearPedidoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastrearPedidoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
