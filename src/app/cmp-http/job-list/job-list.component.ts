import { Component, OnInit } from '@angular/core';

export interface Oferta {
  ciudad: string,
  descripcion: string,
  imgUrl: string,
  nombre: string,
  salario: string,
  skills: Array<string>
}
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  ofertas: Array<Oferta> = [
    {
      ciudad: 'Madrid',
      descripcion: 'It an exciting time at Netflix as we continue to expand our business globally. We are revolutionizing the way people watch their favourite shows and movies, and building our own library of original Netflix content for all to enjoy. Read our culture memo to learn more about our unique company culture.',
      nombre: 'Senior Employee Services Generalist - Spain en Madrid',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/7/1/2715_170_60.png',
      salario: '1000000',
      skills: ['Spanish', 'Human resources', 'HR', 'English']

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
