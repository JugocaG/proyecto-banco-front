import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
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
import { DepositoComponent } from './components/transacciones/deposito/deposito.component';
import { RealizarTransaccionComponent } from './components/transacciones/realizar-transaccion/realizar-transaccion.component';
import { VerTransaccionesComponent } from './components/transacciones/ver-transacciones/ver-transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    ClientesComponent,
    CuentasComponent,
    TransaccionesComponent,
    InicioComponent,
    VerClientesComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    VerCuentasComponent,
    CrearCuentaComponent,
    EliminarCuentaComponent,
    DepositoComponent,
    RealizarTransaccionComponent,
    VerTransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
