import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactform1Component } from './reactform1.component';

describe('Reactform1Component', () => {
  let component: Reactform1Component;
  let fixture: ComponentFixture<Reactform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
