import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  message: String;


  constructor(
    private service: AuthService, private http: HttpClient, private router: Router
  ) { }

  ngOnInit() {
    this.verificarToken();
    this.verCliente();
  }

  verCliente() {
    this.service.verCLiente().subscribe((response) => {
      console.log(response);
      this.message = response.message;
  
    })    
  }

  verificarToken(){
    const token = localStorage.getItem('JWT');
  
    // Verifica si el token está presente
    if (token) {
      // Configura los encabezados de la solicitud con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      // Realiza la solicitud GET con los encabezados configurados
      this.http.get('http://localhost:8080/api/cliente/ver', { headers }).subscribe(
        (data) => {
          // Manejar la respuesta exitosa aquí
          console.log('Respuesta exitosa:', data);
        },
        (error) => {
          // Manejar el error aquí
          console.error('Error en la solicitud:', error);
          localStorage.removeItem('JWT');
          window.location.href = '/'
        }
      );
    } else {
      console.error('Token no presente en localStorage');
      window.location.href = '/'
      // Puedes tomar medidas adicionales, como redirigir a la página de inicio de sesión, si el token no está presente.
    }
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }
}
