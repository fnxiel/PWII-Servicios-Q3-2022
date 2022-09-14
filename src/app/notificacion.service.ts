import { Injectable } from '@angular/core';
import { INotificacion } from './INotificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notificaciones : INotificacion[] = [];

  constructor() { }

  notificar(titulo: string, mensaje: string, tipo: "Informacion" | "Advertencia" | "Error"){
    this.notificaciones.push({
      id: Math.max(...this.notificaciones.map(notificacion => notificacion.id)),
      titulo: titulo,
      mensaje: mensaje,
      tipo: tipo,
      hora: new Date()
    })
  }

  limpiar(){
    this.notificaciones = []
  }

}