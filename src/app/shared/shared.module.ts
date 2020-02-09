import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import * as fromComponents from './component';
import { MaterialModule } from './module/material.module';
import { ConfirmComponent, FooterComponent, TableComponent, ChartComponent } from './component';

@NgModule({
  declarations: [
    FooterComponent,
    TableComponent,
    ConfirmComponent, ChartComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    FooterComponent,
    TableComponent,
    ConfirmComponent, ChartComponent
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, MatSnackBarHorizontalPosition: 'center' },
    }
  ],
  entryComponents: [
    ConfirmComponent, ChartComponent]
})
export class SharedModule { }
