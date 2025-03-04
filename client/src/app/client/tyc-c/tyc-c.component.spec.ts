import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycCComponent } from './tyc-c.component';

describe('TycCComponent', () => {
  let component: TycCComponent;
  let fixture: ComponentFixture<TycCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TycCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TycCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
