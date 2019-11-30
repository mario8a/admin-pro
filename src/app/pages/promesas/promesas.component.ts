import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    

    this.contarTres().then(
      mensaje => console.log('Termino', mensaje)
    ).catch(error => console.error("Error en la promesa", error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    //Las promesas sirven para hacer una tarea asincrona
    return new Promise((resolve, reject) => {
      //Interval hara que cada cierto tiempo ocurra X cosa
        let contador = 0;
        let intervalo = setInterval(() => {
          contador += 1;
          console.log('Contador');
          if (contador === 3){
            resolve(true);
            //reject('Error simple');
            clearInterval(intervalo);
          }
         }, 1000);
      });
  }

}
