import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {


  //recibe como referencia un elemento html
   @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;



  //input porque las variables pueden vnir de afuera

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso:number = 50;

  //Para enviar datos a otros componentes
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda)
    //console.log('Progreso', this.progreso)
  }

  ngOnInit() {
  }

  onChanges(newValue: number){

    //let elemenHTML: any = document.getElementsByName('progreso')[0];
  


    if(newValue >= 100){
      this.progreso = 100;
    } else if(newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

  //  elemenHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {

    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
    } 
    this.progreso = this.progreso + valor;

    //emitir el valor
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
