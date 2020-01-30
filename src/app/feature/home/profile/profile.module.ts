import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';



@NgModule({
  declarations: [EditProfileComponent, ProfileComponent, BottomSheetComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [EditProfileComponent, ProfileComponent],
  providers: [
    {
      provide: MatBottomSheet, useValue:{}
    },
  ],
  entryComponents: [
    BottomSheetComponent
  ]
})
export class ProfileModule { }
 