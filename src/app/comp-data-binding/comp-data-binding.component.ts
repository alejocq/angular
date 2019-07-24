import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-data-binding',
  templateUrl: './comp-data-binding.component.html',
  styleUrls: ['./comp-data-binding.component.css']
})
export class CompDataBindingComponent implements OnInit {
  nombre: string = 'Alejandro';
  editando: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleEditando(){
    this.editando = !this.editando;
  }
  resetNombre(){
    this.nombre = '';
  }
  cambiarNombre(event){
    this.nombre = event.target.value;
  }

  mostrar(ref){
    console.log(ref.value);
    console.dir(ref);
  }
}
