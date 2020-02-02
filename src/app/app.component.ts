import { Component } from '@angular/core';
import { routerTransition } from './core/animation/animation';
import { AuthService } from './core/service/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],

})
export class AppComponent {
  title = 'Stock-Web-App';

  constructor(public auth: AuthService) { 
    console.log('beginning user', this.auth.user);
    console.log('beginning authenticateds', this.auth.authenticated);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
