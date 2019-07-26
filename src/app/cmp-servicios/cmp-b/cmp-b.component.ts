import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = [];
  dato: string = '';
  constructor(private datoService: DatosService) { }

  ngOnInit() {
    this.datos = this.datoService.getDatos();
    this.datoService.datoEnviado.subscribe((dato) =>{
      this.dato = dato;
    });
  }

  guardarDato(dato: string): void{
    this.datoService.addDato(dato);
  }
  
}
