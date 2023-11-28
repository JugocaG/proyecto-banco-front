import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteServiceService } from 'src/app/service/cliente/cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  datos: any[];

  constructor(
    private serviceCliente: ClienteServiceService, private http: HttpClient, private service: AuthService
  ) { }

  ngOnInit() {

    this.service.verificarToken()
  }



  logOut(){
    this.service.logout()
  }


  

}
