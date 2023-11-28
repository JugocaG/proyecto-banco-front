import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VerClientesComponent } from './components/clientes/ver-clientes/ver-clientes.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { VerCuentasComponent } from './components/cuentas/ver-cuentas/ver-cuentas.component';
import { CrearCuentaComponent } from './components/cuentas/crear-cuenta/crear-cuenta.component';
import { EliminarCuentaComponent } from './components/cuentas/eliminar-cuenta/eliminar-cuenta.component';
import { VerTransaccionesComponent } from './components/transacciones/ver-transacciones/ver-transacciones.component';
import { RealizarTransaccionComponent } from './components/transacciones/realizar-transaccion/realizar-transaccion.component';
import { DepositoComponent } from './components/transacciones/deposito/deposito.component';

const routes: Routes = [
    
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cliente', component:ClientesComponent},
  {path: 'cuenta', component: CuentasComponent},
  {path: 'transaccion', component: TransaccionesComponent},
  {path: 'cliente/ver-clientes', component: VerClientesComponent},
  {path: 'cliente/crear-cliente', component: CrearClienteComponent},
  {path: 'cliente/eliminar-cliente', component: EliminarClienteComponent},
  {path: 'cuenta/ver-cuentas', component: VerCuentasComponent},
  {path: 'cuenta/crear-cuenta', component: CrearCuentaComponent},
  {path: 'cuenta/eliminar-cuenta', component: EliminarCuentaComponent},
  {path: 'transaccion/ver-transacciones', component: VerTransaccionesComponent},
  {path: 'transaccion/realizar-transaccion', component: RealizarTransaccionComponent},
  {path: 'transaccion/deposito', component: DepositoComponent},

  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
