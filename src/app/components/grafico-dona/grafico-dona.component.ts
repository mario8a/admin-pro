import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  //Pasamos la data vacia y solo sera Input porque solo va a recibir data no va enviar nada.

  @Input('ChartLabels') public doughnutChartLabels: Label[] = [];
  @Input('ChartData') public doughnutChartData: MultiDataSet = [];
  @Input('ChartType') public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
