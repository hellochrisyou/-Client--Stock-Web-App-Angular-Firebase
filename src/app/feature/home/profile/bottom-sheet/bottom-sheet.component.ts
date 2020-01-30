import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, Validators } from '@angular/forms';
import { URLVALIDATOR } from '@shared/validator/error-validator/validators';
import { User } from '@shared/interface/models';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent extends CreateBaseForm implements OnInit {

  public thisUser: User = {};

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {
    super(fb, changeDetectorRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.fb.group({
          displayNameCtrl: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30)
          ]],
          photoCtrl: ['', [
            Validators.required, 
            Validators.pattern(URLVALIDATOR)
          ]],
        })
  }

   public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public submit(): void {


    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
