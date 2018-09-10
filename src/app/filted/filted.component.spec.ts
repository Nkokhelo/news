import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltedComponent } from './filted.component';

describe('FiltedComponent', () => {
  let component: FiltedComponent;
  let fixture: ComponentFixture<FiltedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
