import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWisheditemsComponent } from './list-wisheditems.component';

describe('ListWisheditemsComponent', () => {
  let component: ListWisheditemsComponent;
  let fixture: ComponentFixture<ListWisheditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWisheditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWisheditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
