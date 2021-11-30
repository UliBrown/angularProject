import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCuentasComponent } from './consulta-cuentas/consulta-cuentas.component';
import { HomeComponent } from './home/home.component';
import { Page404ComponentComponent } from './page404-component/page404-component.component';

const routes: Routes = [
  //Se agregan los path de ruteo
  { path: '', component: HomeComponent}, 
  { path: 'consultaCuentas', component: ConsultaCuentasComponent}, 
  { path: '**', component: Page404ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
