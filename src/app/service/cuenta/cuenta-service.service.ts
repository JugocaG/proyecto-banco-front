import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class CuentaServiceService {

  constructor(private http: HttpClient, private service: AuthService) { }

  verCuenta(): Observable<any> {
    return this.http.get(BASE_URL + 'api/cuenta/ver', {
      headers: this.service.createAuthorizationHeader()
    });
  }

  crearCuenta(crearCuentaRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/cuenta/crear', crearCuentaRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }

  eliminarCuenta(eliminarCuentaRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/cuenta/eliminar', eliminarCuentaRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }
}
