import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {

  constructor() {
  }

  chartConfig: Chart.ChartConfiguration;

  ngOnInit() {
    this.chartConfig = {};
  }

}
