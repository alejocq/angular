import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {

  datos: Array<string> = [];

  constructor(private datoService: DatosService) { }

  ngOnInit() {
    this.datos = this.datoService.getDatos();
  }

  guardarDato(dato: string): void{
    this.datoService.addDato(dato);
  }
  enviarDato(dato: string): void{
    this.datoService.enviar(dato);
  }
}
