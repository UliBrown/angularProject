import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  tittle : String = 'Bienvenido a la página de prueba de Ammper';
  cardOne : String = 'Consulta nuestra lista de clientes en el catálogo de bancos';
  
  constructor() { }

  ngOnInit() :void{
  }
}
