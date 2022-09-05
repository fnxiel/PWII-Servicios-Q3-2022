import { Component } from '@angular/core';
import { INotificacion } from './INotificacion';
import { NotificacionService } from './notificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwiiservices';
  constructor(public notificacionService: NotificacionService){}

  notificar(mensaje: string, tipo: "Informacion" | "Advertencia" | "Error"){
    this.notificacionService.notificar(mensaje, tipo)
  }

  limpiarNotificaciones(){
    this.notificacionService.limpiar()
  }
  
}
