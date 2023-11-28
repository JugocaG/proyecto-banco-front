import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class TransaccionServiceService {

  constructor(private http: HttpClient, private service: AuthService) { }

  verTransacciones(): Observable<any> {
    return this.http.get(BASE_URL + 'api/transaccion/ver', {
      headers: this.service.createAuthorizationHeader()
    });
  }

  realizarTransaccion(crearTransaccionRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/transaccion/enviar', crearTransaccionRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }

  realizarDeposito(realizarDepositoRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/transaccion/deposito', realizarDepositoRequest, {
      headers: this.service.createAuthorizationHeader()
    });
  }
}
