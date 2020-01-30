import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { User } from 'firebase';

declare var $: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  thisUser: User;
  
  constructor(
    public auth: AuthService,
  ) {
   }

  public ngOnInit(): void {
  }
}
