import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLogicComponent } from './history-logic.component';

describe('HistoryLogicComponent', () => {
  let component: HistoryLogicComponent;
  let fixture: ComponentFixture<HistoryLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
