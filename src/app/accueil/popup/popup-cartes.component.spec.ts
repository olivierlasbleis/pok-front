import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCartesComponent } from './popup-cartes.component';

describe('PopupCartesComponent', () => {
  let component: PopupCartesComponent;
  let fixture: ComponentFixture<PopupCartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
