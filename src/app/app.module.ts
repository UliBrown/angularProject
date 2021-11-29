import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Se importa modulo para peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Añadimos los componentes de angularmaterial
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ConsultaCuentasComponent } from './consulta-cuentas/consulta-cuentas.component';
import { Page404ComponentComponent } from './page404-component/page404-component.component';
//Se importa el modulo para formularios
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaCuentasComponent,
    Page404ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatCardModule, 
    MatIconModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
