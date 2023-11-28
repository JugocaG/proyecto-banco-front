import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteServiceService } from 'src/app/service/cliente/cliente-service.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent {
  datos: any[];

  constructor(
    private serviceCliente: ClienteServiceService, private http: HttpClient, private router: Router, private service: AuthService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.verCliente();
  }

  verCliente() {
    this.serviceCliente.verCLiente().subscribe((response) => {
      console.log(response);
      this.datos = response;
      
    })

  }

}
