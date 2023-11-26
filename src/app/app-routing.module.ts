import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
    
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cliente', component:ClientesComponent},
  {path: 'cuenta', component: CuentasComponent},
  {path: 'transaccion', component: TransaccionesComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
