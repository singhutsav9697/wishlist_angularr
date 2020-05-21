import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistMgtComponent } from './wishlist-mgt.component';

describe('WishlistMgtComponent', () => {
  let component: WishlistMgtComponent;
  let fixture: ComponentFixture<WishlistMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
