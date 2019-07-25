import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @Input('appMarcar') colorFondo = 'yellow';
  colorInicial = 'white';

  @HostBinding('style.backgroundColor') color;
  @HostListener('mouseover') onMouseOver(){
    this.color = this.colorFondo
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color = this.colorInicial
  }
 // @HostBinding('attr.disabled')
  constructor() { 
      //this.color = this.colorFondo
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.colorFondo = this.colorFondo ? this.colorFondo : 'yellow';
    
  }
}
