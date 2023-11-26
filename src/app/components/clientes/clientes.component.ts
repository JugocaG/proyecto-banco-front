import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  message: String;

  constructor(
    private service: AuthService, private http: HttpClient
  ) { }

  ngOnInit() {
    this.verCliente();

  }

  verCliente() {
    this.service.verCLiente().subscribe((response) => {
      console.log(response);
      this.message = response.message;
    })

  }


}
