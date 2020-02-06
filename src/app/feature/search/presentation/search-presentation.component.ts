import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SEARCHGROUP } from '@shared/const/search-option.const';
import { SearchGroup } from '@shared/interface/interface';

import { CREATE_SEARCH_HEADER } from '../search.config';
import { CreateBaseForm } from '@shared/base/base-form';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-bar',
  templateUrl: './search-presentation.component.html',
  styleUrls: ['./search-presentation.component.scss']
})
export class SearchPresentationComponent extends CreateBaseForm implements OnInit {


  searchGroup: SearchGroup[] = SEARCHGROUP;

  constructor(
    private fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(fb, changeDetectorRef);
  }

  searchOptCtrl = new FormControl('', [Validators.required]);

  @Output() emitValue = new EventEmitter();

  get searchOption() {
    return this.formGroup.get('searchOptCtrl');
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = CREATE_SEARCH_HEADER(this.fb);
  }

  public submitForm(): void {
    if (this.formGroup.get('searchOptCtrl').value) {
      this.emitValue.emit(this.formGroup.get('searchOptCtrl').value);
    }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
