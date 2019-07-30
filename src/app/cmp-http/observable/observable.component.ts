import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  suscripciones: Array<Subscription> = [];
  constructor() { }

  ngOnInit() {
   // this.getNums();
  // this.miInterval()
  //this.conError()
  this.obsNumsPares()
  }
  getNums(){
    const numsObs = interval(500);
    const s =  numsObs.subscribe((num) => {
      console.log(num);
    })
    this.suscripciones.push(s);
  }
  miInterval(){
    const miIntervalObs = Observable.create((observer: Observer<number>) =>{
      let i = 0;
      setInterval(() => {
        observer.next(i);
        i++;
      }, 1)
    });

    const s = miIntervalObs.subscribe((n) =>{
      console.log("Mi Interval: ", n);
    })
    this.suscripciones.push(s)
  }
  conError(){
    const obsConError = Observable.create((observer: Observer<string>) => {
      setTimeout(() =>{

        observer.next('mensaje 1')
      }, 300)
      setTimeout(() =>{

        observer.next('mensaje 2')
      }, 700)
      setTimeout(() =>{

        observer.error('Error')
      }, 1300)
      setTimeout(() =>{

        observer.next('mensaje 3')
      }, 2000)
    })
    const s = obsConError.subscribe(
      msg => console.log("Mi msg ", msg),
      err => console.log("Mi error ", err),
      () => console.log("El observable ha terminado") )

    this.suscripciones.push(s)
  }
  obsNumsPares(){
    const obsNumsPares = Observable.create((observer: Observer<number>) =>{
      setInterval(() => {
        const num = Math.floor(Math.random() *101)
        observer.next(num)
      }, 200)
    });
    const s = obsNumsPares.pipe(
      filter(((n: number) => n% 2 === 0)),
      map((n: number) => n/2)
    ).subscribe((num) => {
      console.log("Num par: ", num);
    })
    this.suscripciones.push(s)
  }
  ngOnDestroy(): void {
    this.suscripciones.forEach(sub => sub.unsubscribe())
  }
}
