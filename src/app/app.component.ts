import { Component, OnInit } from '@angular/core';
import { routerTransition } from './core/animation/animation';
import { AuthService } from './core/service/auth/auth.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],

})
export class AppComponent implements OnInit {
  title = 'Stock-Web-App';

  constructor(public auth: AuthService) { 
    console.log('beginning user', this.auth.user);
    console.log('beginning authenticateds', this.auth.isAuthenticated);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
  ngOnInit(): void {
    $(".menu-collapsed").click(function() {
      $(this).toggleClass("menu-expanded");
    });
  }
}


