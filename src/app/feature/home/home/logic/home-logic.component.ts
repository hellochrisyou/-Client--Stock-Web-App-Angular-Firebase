import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CloseDialogService } from 'app/core/service/close-dialog/close-dialog.service';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-logic.component.html',
  styleUrls: ['./home-logic.component.scss']
})
export class HomeComponent implements OnInit {

  routerTag: string;
  condition = true;

  constructor(
    private closeDialogService: CloseDialogService,
    public auth: AuthService
  ) {
    console.log('console', this.auth.user);
  }

  ngOnInit() {
    console.log('hello');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');


    // signUpButton.addEventListener('click', () => {
    //   container.classList.add('right-panel-active');
    // });


    // signInButton.addEventListener('click', () => {
    //   container.classList.remove('right-panel-active');
    // });

    this.closeDialogService.emitSignupSuccess.subscribe(x => {
      this.btnClick();
    });
  }

  public btnClick(): void {
    this.condition = !this.condition;
    console.log(this.condition);
  }

  // public goToprofile(): void {
  //   this.routerTag = 'profile';
  // }

  // public goTosearch(): void {
  //   this.routerTag = 'search';
  // }

  // public goTolist(): void {
  //   this.routerTag = 'list';
  // }
}
