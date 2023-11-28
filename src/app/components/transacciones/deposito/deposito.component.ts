import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TransaccionServiceService } from 'src/app/service/transaccion/transaccion-service.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {

  crearDepositoForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private transaccionService: TransaccionServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.crearDepositoForm = this.fb.group({
      cuentaDestino: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  realizarDeposito(){

    console.log(this.crearDepositoForm.value);
    this.transaccionService.realizarDeposito(this.crearDepositoForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Deposito creado con exito!")
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
