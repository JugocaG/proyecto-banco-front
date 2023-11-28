import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaServiceService } from 'src/app/service/cuenta/cuenta-service.service';

@Component({
  selector: 'app-ver-cuentas',
  templateUrl: './ver-cuentas.component.html',
  styleUrls: ['./ver-cuentas.component.css']
})
export class VerCuentasComponent {

  datos: any[];

  constructor(
    private serviceCuenta: CuentaServiceService, private http: HttpClient, private router: Router, private service: AuthService
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.verCuenta();
  }

  verCuenta() {
    this.serviceCuenta.verCuenta().subscribe((response) => {
      console.log(response);
      this.datos = response;
      
    })

  }

}
