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

  notificar(titulo: string, mensaje: string, tipo: "Informacion" | "Advertencia" | "Error"){
    this.notificacionService.notificar(titulo, mensaje, tipo)
  }

  limpiarNotificaciones(){
    this.notificacionService.limpiar()
  }
  
}
