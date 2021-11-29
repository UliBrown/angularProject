import { Component, OnInit } from '@angular/core';
import { ServiceCtasService } from './service-ctas.service';

@Component({
  selector: 'app-consulta-cuentas',
  templateUrl: './consulta-cuentas.component.html',
  styleUrls: ['./consulta-cuentas.component.css']
})
export class ConsultaCuentasComponent implements OnInit {

  constructor( private ctasService: ServiceCtasService) { }

  ngOnInit(): void {
//Se añade subscribe para recibir el mensaje de respuesta o error de la peticion
    this.ctasService.getBelvoBBVA().subscribe(
    res => console.log(res),
    err => console.log(err)
    )
  }

}
