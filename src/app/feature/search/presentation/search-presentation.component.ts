import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SEARCHGROUP } from '@shared/const/search-option.const';
import { SearchGroup } from '@shared/interface/interface';

import { CREATE_SEARCH_HEADER } from '../search.config';
import { CreateBaseForm } from '@shared/base/base-form';

@Component({
  selector: 'search-bar',
  templateUrl: './search-presentation.component.html',
  styleUrls: ['./search-presentation.component.scss']
})
export class SearchPresentationComponent extends CreateBaseForm implements OnInit {

  searchGroup: SearchGroup[] = SEARCHGROUP;
  value: string;
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
    console.log('search formGroup:', this.formGroup)
    if (this.formGroup.get('searchOptCtrl')) {
      if (this.searchGroup[0].option.forEach(x => { x === this.searchOptCtrl.value }) !== null) {
        this.value = this.searchOptCtrl.value
      } else {
        this.value = this.searchOptCtrl.value;
      }
      console.log('submitformvalue', this.value)
      this.emitValue.emit(this.value);
    }
  }
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
