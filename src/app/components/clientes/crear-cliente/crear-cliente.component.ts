import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteServiceService } from 'src/app/service/cliente/cliente-service.service';




@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  crearClienteForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteServiceService,
  ) { }

  ngOnInit() {
    this.service.verificarToken()
    this.crearClienteForm = this.fb.group({
      nombre: ['', Validators.required],
    })
  }

  crearCliente(){

    console.log(this.crearClienteForm.value);
    this.clienteService.crearCliente(this.crearClienteForm.value).subscribe((response) => {
      console.log(response);
      alert("¡Cliente creado con exito!")
      this.router.navigateByUrl('/cliente');
    
    })

  }


}
