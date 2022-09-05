import { Injectable } from '@angular/core';
import { INotificacion } from './INotificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notificaciones : INotificacion[] = [];

  constructor() { }

  notificar(mensaje: string, tipo: "Informacion" | "Advertencia" | "Error"){
    this.notificaciones.push({
      id: Math.max(...this.notificaciones.map(notificacion => notificacion.id)),
      mensaje: mensaje,
      tipo: tipo
    })
  }

  limpiar(){
    this.notificaciones = []
  }

}