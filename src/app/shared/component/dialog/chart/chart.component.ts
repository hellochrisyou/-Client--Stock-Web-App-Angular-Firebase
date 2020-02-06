import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '@shared/interface/interface';
import { HttpService } from 'app/core/service/http/http.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from 'app/core/service/mapper/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  chartData: ChartDataSets[];
  chartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#4169E1',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'rgba(245, 171, 53, 1)',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'rgba(211, 84, 0, 1)',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(
    private dialogRef: MatDialogRef<ChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpService: HttpService,
    private chartService: ChartService
  ) {


  }

  ngOnInit(): void {
    this.dialogRef.updateSize('100vw');

    this.httpService.getChart(this.data.keyword.symbol, this.data.increment).subscribe(data => {
      this.chartData = [];
      switch (this.data.increment) {
        case '5d':
          this.chartService.mapChartArrayFiveDays(data, this.data.keyword.symbol);
          this.chartLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
          break;
        case '1m':
          this.chartService.mapChartArrayOneMonth(data, this.data.keyword.symbol);
          this.chartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          break;
        case '1y':
          this.chartService.mapChartArrayOneYear(data, this.data.keyword.symbol);
          // tslint:disable-next-line: max-line-length
          this.chartLabels = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'];
          break;
        case '5y':
          this.chartService.mapChartArrayFiveYears(data, this.data.keyword.symbol);
          this.chartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
          break;
      }
      this.chartData.push(this.chartService.getLow());
      this.chartData.push(this.chartService.getHigh());
      this.chartData.push(this.chartService.getChange());
    },
      // err => console.log('HTTP Error', err),
      // () => console.log('HTTP request completed.')
    );
  }
}
