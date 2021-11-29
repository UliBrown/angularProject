import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCtasService {

  constructor(private http: HttpClient){}

  URL = 'http://localhost:4000/apiBelvoBBVA';
  
  getBelvoBBVA(){
    return this.http.get(this.URL);
  }
}
