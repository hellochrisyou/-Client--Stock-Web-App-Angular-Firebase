import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'toolbar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  public logout(){
    this.auth.signOut();
  }

}
