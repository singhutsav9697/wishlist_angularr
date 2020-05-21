import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWisheditemsComponent } from './add-wisheditems.component';

describe('AddWisheditemsComponent', () => {
  let component: AddWisheditemsComponent;
  let fixture: ComponentFixture<AddWisheditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWisheditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWisheditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
