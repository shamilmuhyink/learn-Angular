import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms01Component } from './forms-01.component';

describe('Forms01Component', () => {
  let component: Forms01Component;
  let fixture: ComponentFixture<Forms01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Forms01Component]
    });
    fixture = TestBed.createComponent(Forms01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
