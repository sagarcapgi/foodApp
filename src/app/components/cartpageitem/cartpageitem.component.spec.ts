import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpageitemComponent } from './cartpageitem.component';

describe('CartpageitemComponent', () => {
  let component: CartpageitemComponent;
  let fixture: ComponentFixture<CartpageitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpageitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpageitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
