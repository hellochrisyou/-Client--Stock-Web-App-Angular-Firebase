import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import * as fromProfile from '.';

@NgModule({
  declarations: [...fromProfile.ProfileComponents],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [...fromProfile.ProfileComponents]
})
export class ProfileModule { }
