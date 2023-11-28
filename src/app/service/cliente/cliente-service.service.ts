import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient, private service: AuthService) { }

  verCLiente(): Observable<any> {
    return this.http.get(BASE_URL + 'api/cliente/ver', {
      headers: this.service.createAuthorizationHeader()
    });
    
  }

  crearCliente(crearClienteRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/cliente/crear', crearClienteRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }

  eliminarCliente(eliminarClienteRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/cliente/eliminar', eliminarClienteRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }
}
