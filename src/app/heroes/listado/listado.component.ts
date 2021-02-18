import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Superman','Batman','Thor','Spiderman'];  
  heroeborrado: string = '';

  constructor() { 
  }

  ngOnInit(): void {    
  }

   borrarheroe (){ 
    this.heroeborrado = this.heroes.shift() || '';
  }
}
