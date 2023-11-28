import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteServiceService } from 'src/app/service/cliente/cliente-service.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {

  eliminarClienteForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.eliminarClienteForm = this.fb.group({
      id: ['', Validators.required],
    })
  }

  eliminarCliente(){

    console.log(this.eliminarClienteForm.value);
    this.clienteService.eliminarCliente(this.eliminarClienteForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Cliente eliminado con exito!")
      this.router.navigateByUrl('/cliente');
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
