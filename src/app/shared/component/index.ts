import { ChartComponent } from './dialog/chart/chart.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';

export const ReusableComponents: any[] = [
    {
        FooterComponent,
        TableComponent
    }
];

export const ReusableDialogs: any[] = [
    {
        ChartComponent,
        ConfirmComponent,
    }
];

export * from './footer/footer.component';
export * from './table/table.component';
export * from './dialog/chart/chart.component';
export * from './dialog/confirm/confirm.component';
