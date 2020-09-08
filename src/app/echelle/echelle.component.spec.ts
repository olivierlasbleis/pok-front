import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchelleComponent } from './echelle.component';

describe('EchelleComponent', () => {
  let component: EchelleComponent;
  let fixture: ComponentFixture<EchelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
