import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('Alejandro', [Validators.required, this.esUnStark(['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'])]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    });
  }

  login(){
    console.log(this.form)
  }
  esUnStark(nombresValidos: Array<string>){
    return (control: FormControl) =>{
      //const nombresValidos = ['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'];
    if(nombresValidos.includes(control.value.toLowerCase())){
      return null
    }
    return{
      esUnStark: false
    }
    }
    
  }
}
