import { Component, OnInit } from '@angular/core';
import { ServiceCtasService } from './service-ctas.service';

@Component({
  selector: 'app-consulta-cuentas',
  templateUrl: './consulta-cuentas.component.html',
  styleUrls: ['./consulta-cuentas.component.css']
})
export class ConsultaCuentasComponent implements OnInit {

  constructor( public cuentasService: ServiceCtasService) { }

  ngOnInit(): void {
    this.getCtas();
  }

  getCtas(){
//Se añade subscribe para recibir el mensaje de respuesta o error de la peticion
  this.cuentasService.getBelvoBBVA().subscribe(
  res => {
    console.log(res);
    this.cuentasService.consulta = res;
  },
  err => console.log(err)
  )    
  }
}
