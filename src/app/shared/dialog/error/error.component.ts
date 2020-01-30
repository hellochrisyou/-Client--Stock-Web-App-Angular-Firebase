import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogData } from '@shared/interface/interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  title = '';
  subTitle = '';
  text = '';
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.text = data.text;
    console.log('here here', data);
  }
  ngOnInit() {
  }

}