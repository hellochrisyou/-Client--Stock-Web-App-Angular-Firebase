import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLogicComponent } from './signup-presentation.component';

describe('SignupLogicComponent', () => {
  let component: SignupLogicComponent;
  let fixture: ComponentFixture<SignupLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupLogicComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
