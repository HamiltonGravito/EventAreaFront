import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Evento } from '../shared/evento.model';

@Injectable({
    providedIn: 'root',
})

export class EventoService {

    salvarEventoUrl: string = 'http://localhost:8080/evento';
    salvarImagemUrl: string = 'http://localhost:8080/evento/imagem';

    constructor(private http: HttpClient){ }

    salvarEvento(evento: Evento){
        return this.http.post(this.salvarEventoUrl, evento);
    }

    salvarImagem(formData: FormData){
        return this.http.post(this.salvarImagemUrl, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }

}