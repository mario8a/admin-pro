import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {


    //retry(numero de intentos)
    this.subscription =  this.regresaObservable()
    .subscribe(
      //ESTE ES  EL PRIMERO CUANDO RECIBO INFORMACION CON NEXT
      numero => console.log('Subs', numero),
      //EL SEGUNDO ES UN ERROR
      error => console.error('Error en el obs', error),
      //EL TERCERO DONDE NO RECIBE NADA
      () => console.log('El obs termino!')
    );
  }

  

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {


    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        // contador += 1;
        contador ++;


        const salida = {
          valor: contador
        }

        observer.next(salida);

        // if(contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Ayudaaaa');
        // }

      }, 1000);
    }).pipe(
//el operador map transforma la data y regresa lo que se necesita
      map(resp => resp.valor),
      //el operador filter regresa un true o false
      filter( (valor , index) => {
        // console.log('Filter', valor, index);

        if( (valor % 2) === 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
        // return true;
      })
    );
  }

}
