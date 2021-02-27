import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudcountComponent } from './studcount.component';

describe('StudcountComponent', () => {
  let component: StudcountComponent;
  let fixture: ComponentFixture<StudcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
