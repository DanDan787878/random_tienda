import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappCComponent } from './whatsapp-c.component';

describe('WhatsappCComponent', () => {
  let component: WhatsappCComponent;
  let fixture: ComponentFixture<WhatsappCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
