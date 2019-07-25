import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  items = ['uno', 'dos', 'tres'];
  nombre = '';
  negrita = false;
  color = 'blue';
  mostrarItem = true;
  constructor() { }

  ngOnInit() {
  }
  toggleMostrarItem(){
    this.mostrarItem = !this.mostrarItem
  }
}
