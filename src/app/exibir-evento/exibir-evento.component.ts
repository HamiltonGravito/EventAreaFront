import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { EventoService } from '../service/evento.service';
import { Evento } from '../shared/evento.model';

@Component({
  selector: 'app-exibir-evento',
  templateUrl: './exibir-evento.component.html',
  styleUrls: ['./exibir-evento.component.css'],
  providers: [ EventoService ]
})
export class ExibirEventoComponent implements OnInit {

  public eventos: Evento[];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
   this.eventoService.exibirEventos()
    .subscribe((resposta: any[]) => {
      console.log(resposta);
      this.eventos = resposta;
    });
  }

}
