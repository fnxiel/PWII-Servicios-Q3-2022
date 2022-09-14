import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../notificacion.service';

@Component({
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
  styleUrls: ['./primercomponente.component.scss']
})
export class PrimercomponenteComponent implements OnInit {

  constructor(public notificacionService: NotificacionService) { }

  ngOnInit(): void {
  }

  notificar(){
    this.notificacionService.notificar("Primer componente","Primer componente", "Informacion")
  }
}
