import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdComponent } from './menu-ad.component';

describe('MenuAdComponent', () => {
  let component: MenuAdComponent;
  let fixture: ComponentFixture<MenuAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
