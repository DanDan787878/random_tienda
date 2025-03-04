import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCComponent } from './factura-c.component';

describe('FacturaCComponent', () => {
  let component: FacturaCComponent;
  let fixture: ComponentFixture<FacturaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
