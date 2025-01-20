import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  inject,
  HostListener,
} from '@angular/core';
import * as echarts from 'echarts';
import { DataService } from '../../services/data.service';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ChartData, ChartPoint } from '../../models/chart-data.interface';
import { ChartSymbols } from '../../models/chart-symbols.enum';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartElement: ElementRef | undefined;

  private readonly dataService = inject(DataService);

  availableSymbols = Object.values(ChartSymbols);

  chartTitle: string = 'График данных';
  lineColor: string = '#ff0000';
  pointSymbol: ChartSymbols = ChartSymbols.None;
  selectedXAxis: string = '';
  selectedYAxis: string = '';
  dataKeys: string[] = [];
  chartData: ChartPoint[] = [];
  chartInstance!: echarts.ECharts;

  ngOnInit(): void {
    this.dataService.getChartData().subscribe((response: ChartData) => {
      this.chartData = response.data;
      this.chartTitle = response.title || this.chartTitle;
      this.dataKeys = Object.keys(response.data[0]);
      this.selectedXAxis = this.dataKeys[0];
      this.selectedYAxis = this.dataKeys[1];

      this.initializeChart();
    });
  }

  onSettingsChange(): void {
    this.setChartOptions();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.chartInstance?.resize();
  }

  private initializeChart(): void {
    if (this.chartElement) {
      this.chartInstance = echarts.init(this.chartElement.nativeElement);

      this.setChartOptions();
    }
  }

  private setChartOptions(): void {
    if (!this.chartInstance) return;

    const xData = this.chartData.map((point) => point[this.selectedXAxis]);
    const yData = this.chartData.map((point) => point[this.selectedYAxis]);

    const options = {
      tooltip: {
        trigger: 'axis',
        formatter: (params: CallbackDataParams[]) => {
          const index = params[0].dataIndex;
          return `Точка ${index + 1}<br/>
                  ${this.selectedXAxis}: ${xData[index]}<br/>
                  ${this.selectedYAxis}: ${yData[index]}`;
        },
      },
      xAxis: {
        type: 'value',
        name: this.selectedXAxis,
        scale: true,
      },
      yAxis: {
        type: 'value',
        name: this.selectedYAxis,
        scale: true,
      },
      series: [
        {
          type: 'line',
          smooth: true,
          data: this.chartData.map((item) => [
            item[this.selectedXAxis],
            item[this.selectedYAxis],
          ]),

          symbol: this.pointSymbol,
          symbolSize: 8,
          color: this.lineColor,
          lineStyle: {
            color: this.lineColor,
            width: 4,
          },
        },
      ],
    };

    this.chartInstance.setOption(options);
  }

  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }
}
