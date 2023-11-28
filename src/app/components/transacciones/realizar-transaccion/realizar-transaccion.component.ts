import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TransaccionServiceService } from 'src/app/service/transaccion/transaccion-service.service';

@Component({
  selector: 'app-realizar-transaccion',
  templateUrl: './realizar-transaccion.component.html',
  styleUrls: ['./realizar-transaccion.component.css']
})
export class RealizarTransaccionComponent {

  crearTransaccionForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private transaccionService: TransaccionServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.crearTransaccionForm = this.fb.group({
      cuentaOrigen: ['', Validators.required],
      cuentaDestino: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  realizarTransaccion(){

    console.log(this.crearTransaccionForm.value);
    this.transaccionService.realizarTransaccion(this.crearTransaccionForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Transaccion creado con exito!")
      this.router.navigateByUrl('/transaccion');
    
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
