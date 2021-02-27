import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactform2Component } from './reactform2.component';

describe('Reactform2Component', () => {
  let component: Reactform2Component;
  let fixture: ComponentFixture<Reactform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
