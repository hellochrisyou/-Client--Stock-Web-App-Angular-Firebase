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

  constructor(public auth: AuthService) { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
