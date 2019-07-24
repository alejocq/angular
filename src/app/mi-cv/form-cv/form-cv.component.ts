import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  imgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  //skills: Array<string> = [];
  @Output() skills = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  agregarSkill(event){    
    this.skills.emit(event);
    console.log(this.skills)
  }
}
