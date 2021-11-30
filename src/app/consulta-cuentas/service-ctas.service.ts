import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from '../models/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ServiceCtasService {
  URL = '/apiBelvoBBVA';

  consulta: Consulta[] = [];

  constructor(private http: HttpClient){}
  
  getBelvoBBVA(){
    return this.http.get<Consulta[]>(this.URL);
  }
}
