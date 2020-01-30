import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPresentationComponent } from './search-presentation.component';

describe('SearchPresentationComponent', () => {
  let component: SearchPresentationComponent;
  let fixture: ComponentFixture<SearchPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPresentationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
