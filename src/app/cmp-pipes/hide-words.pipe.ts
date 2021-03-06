import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: any, ...args: [Array<string>]): any {
    let palabras = args[0];
    
    for(let palabra of palabras){
      let reg = new RegExp(palabra, 'g');
      if (palabra.match(reg)){
      value = value.replace(reg, '*'.repeat(palabra.length))
      }
    }
    return value;
  }

}
