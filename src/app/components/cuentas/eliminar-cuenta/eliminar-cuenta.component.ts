import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaServiceService } from 'src/app/service/cuenta/cuenta-service.service';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.css']
})
export class EliminarCuentaComponent {

  eliminarCuentaForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private cuentaService: CuentaServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.eliminarCuentaForm = this.fb.group({
      id: ['', Validators.required],
    })
  }

  eliminarCuenta(){

    console.log(this.eliminarCuentaForm.value);
    this.cuentaService.eliminarCuenta(this.eliminarCuentaForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Cuenta eliminado con exito!")
      this.router.navigateByUrl('/cuenta');
    },
    (error) => {
      const mensajeError = this.obtenerMensajeDeError(error);
      alert(mensajeError)
    })

  }

  obtenerMensajeDeError(error: any): string {
    if (error.error && error.error.text) {
      // Si existe la propiedad 'text' en el error, devolver ese valor
      return error.error.text;
    } else if (error.error instanceof ErrorEvent) {
      // Error de red o de cuenta
      return `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      return `Error: ${error.status} - ${error.message}`;
    }
  }

}
