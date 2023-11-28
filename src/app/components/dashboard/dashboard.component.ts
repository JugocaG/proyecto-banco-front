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
    this.service.verificarToken();
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }
}
