import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {
  nombre = 'Alejandro';
  apellido = 'Cardona';
  foto = '';
  email = '';

  skills: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }
  
  agregarString(event){
    this.skills.push(event);
    console.log(this.skills)
  }
}
