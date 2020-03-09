import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '@shared/interface/interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  title = '';
  subTitle = '';
  text = '';
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.text = data.text;
  }
  ngOnInit() {
  }

}
