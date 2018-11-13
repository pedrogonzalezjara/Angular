import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicios/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private host: string;
  constructor(private servicio: ServicioService) {
    this.pruebaServicio();
  }

  pruebaServicio() {
    this.servicio.obtenerDatos().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
