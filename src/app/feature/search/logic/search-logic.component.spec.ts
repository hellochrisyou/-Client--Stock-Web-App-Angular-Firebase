import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLogicComponent } from './search-logic.component';

describe('SearchLogicComponent', () => {
  let component: SearchLogicComponent;
  let fixture: ComponentFixture<SearchLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLogicComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
