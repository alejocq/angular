import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRight'
})
export class CurrencyRightPipe implements PipeTransform {

  transform(value: string): string {
    let valor = value.split('');
    let simbolo  = valor.shift();
    valor.push(simbolo);
    const arr = valor.join('');
   // return value.slice(1) + value[0]
    return arr;
  }

}
