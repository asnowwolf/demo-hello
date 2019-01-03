import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Directive({
  selector: '[appChart]',
})
export class ChartDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  @Input('appChart')
  config: Chart.ChartConfiguration;

  chart: Chart;

  ngOnInit(): void {
    this.chart = new Chart(this.elementRef.nativeElement, this.config);
  }

}
