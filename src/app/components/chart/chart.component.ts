import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chartElement: ElementRef | undefined;

  myChart: any;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeChart();
  }

  initializeChart() {
    if (this.chartElement) {
      this.myChart = echarts.init(this.chartElement.nativeElement);
      this.setChartOptions();
    }
  }

  setChartOptions() {
    const options = {
      title: {
        text: 'Sample Chart', // сюда добавить данные из json
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'], // сюда добавить данные из json
      },
      yAxis: {
        type: 'value', // сюда добавить данные из json
      },
      series: [
        {
          name: 'y',
          type: 'line',
          data: [10, 20, 30, 40, 50],
        },
      ],
    };

    this.myChart.setOption(options);
  }

  ngOnDestroy() {
    if (this.myChart) {
      this.myChart.dispose();
    }
  }
}
