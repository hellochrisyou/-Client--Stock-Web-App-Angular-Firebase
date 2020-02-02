import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { EditProfileComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [EditProfileComponent, ProfileComponent, ProfileViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [EditProfileComponent, ProfileComponent, ProfileViewComponent]
})
export class ProfileModule { }
 