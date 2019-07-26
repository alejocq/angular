import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  datos: Array<string> = ['a'];
  datoEnviado = new EventEmitter<string>();

  constructor(private logservice: LogService) { }

  getDatos(): Array<string>{
    return this.datos;
  }
  addDato(dato: string): void{
    this.datos.push(dato);
    this.logservice.mostrar('Se ha guardado ' + dato);
  }
  enviar(dato: string): void{
    this.datoEnviado.emit(dato);
  }
}
