import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoCComponent } from './pago-c.component';

describe('PagoCComponent', () => {
  let component: PagoCComponent;
  let fixture: ComponentFixture<PagoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
