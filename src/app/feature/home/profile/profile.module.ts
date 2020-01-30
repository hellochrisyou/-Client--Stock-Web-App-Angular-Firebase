import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [EditProfileComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [EditProfileComponent, ProfileComponent]
})
export class ProfileModule { }
