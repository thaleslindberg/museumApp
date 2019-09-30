import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchScreenPage } from './search-screen.page';

describe('SearchScreenPage', () => {
  let component: SearchScreenPage;
  let fixture: ComponentFixture<SearchScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
