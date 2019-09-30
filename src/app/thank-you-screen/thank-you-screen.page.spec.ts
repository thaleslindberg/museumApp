import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouScreenPage } from './thank-you-screen.page';

describe('ThankYouScreenPage', () => {
  let component: ThankYouScreenPage;
  let fixture: ComponentFixture<ThankYouScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
