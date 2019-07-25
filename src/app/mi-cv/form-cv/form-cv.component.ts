import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  @Input() nombre = '';
  @Input() apellido = '';
  imgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  @Input() skills: Array<string> = [];
 // @Output() skills = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  agregar(skill){
    this.skills.push(skill.value)
  }
  /* agregarSkill(event){    
    console.log(event.value)
    this.skills.emit(event.value);
    console.log(this.skills)
  } */
}
