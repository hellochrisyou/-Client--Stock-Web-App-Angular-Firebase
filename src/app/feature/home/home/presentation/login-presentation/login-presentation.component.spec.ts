import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogicComponent } from './login-presentation.component';

describe('LoginLogicComponent', () => {
  let component: LoginLogicComponent;
  let fixture: ComponentFixture<LoginLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLogicComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
