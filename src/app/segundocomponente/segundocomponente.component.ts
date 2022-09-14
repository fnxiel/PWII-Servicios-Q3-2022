import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../notificacion.service';

@Component({
  selector: 'app-segundocomponente',
  templateUrl: './segundocomponente.component.html',
  styleUrls: ['./segundocomponente.component.scss']
})
export class SegundocomponenteComponent implements OnInit {

  constructor(public notificacionService: NotificacionService) { }

  ngOnInit(): void {
  } 
  
  notificar(){
    this.notificacionService.notificar("Segundo componente","Estoy notificando desde el segundo componente", "Advertencia")
  }
}
