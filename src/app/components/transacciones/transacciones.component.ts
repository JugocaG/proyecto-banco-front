import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaServiceService } from 'src/app/service/cuenta/cuenta-service.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent {

  constructor(
    private serviceCuenta: CuentaServiceService, private http: HttpClient, private service: AuthService
  ) { }


  ngOnInit() {
    this.service.verificarToken()
  }


  logOut(){
    this.service.logout()
  }

}
