import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  message: String;

  constructor(
    private service: AuthService
  ) { }

  ngOnInit() {
    this.verCliente();
  }

  verCliente() {
    this.service.verCLiente().subscribe((response) => {
      console.log(response);
      this.message = response.message;
    })
  }
}
