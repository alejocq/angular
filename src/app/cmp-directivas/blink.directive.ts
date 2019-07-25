import { Directive, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit, OnDestroy {

  @Input('appBlink') colorLetra;
  @HostBinding('style.color') color;
  intervalId = null;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!this.colorLetra){
      this.colorLetra = 'yellow';
    }
    let i = 0;
    this.intervalId = setInterval(() =>{
      console.log(i)
      i++
      this.color = this.color === 'black' ? this.colorLetra : 'black';
    }, 300)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId)
  }
  constructor() { }

}
