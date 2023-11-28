import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CuentaServiceService } from 'src/app/service/cuenta/cuenta-service.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {


  opcionTipoCuenta = [
    { label: 'Cuenta Ahorros', valor: 0 },
    { label: 'Cuenta Corriente', valor: 1 },
    { label: 'Tarjeta de Credito', valor: 2 }
  ];

  opcionNivel = [
    { label: 'Ejecutiva', valor: 0 },
    { label: 'General', valor: 1 }
  ];

  opcionSeleccionada: number | undefined;

  crearCuentaForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private cuentaService: CuentaServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.crearCuentaForm = this.fb.group({
      tipoCuenta: ['', Validators.required],
      nivel: ['', Validators.required],
      idPropietario: ['', Validators.required],
    })
  }

  crearCuenta(){

    console.log(this.crearCuentaForm.value);
    this.cuentaService.crearCuenta(this.crearCuentaForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Cuenta creado con exito!")
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
      // Error de red o de cliente
      return `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      return `Error: ${error.status} - ${error.message}`;
    }
  }

}
