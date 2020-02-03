import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ChartsModule } from 'ng2-charts';

import { TableComponent } from './component/table/table.component';
import { ChartComponent } from './dialog/chart/chart.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { ErrorComponent } from './dialog/error/error.component';
import { MaterialModule } from './module/material.module';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    TableComponent, 
    ConfirmComponent, 
    ChartComponent, 
    ErrorComponent,
    FooterComponent,
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
    TableComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, MatSnackBarHorizontalPosition: 'center' },
    }
  ],
  entryComponents: [
    ConfirmComponent,
    ChartComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }
