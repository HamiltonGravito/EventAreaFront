import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Evento } from '../shared/evento.model';
import { Observable } from 'rxjs';
import { map } from 'jquery';

@Injectable({
    providedIn: 'root',
})

export class EventoService {

    salvarEventoUrl: string = 'http://localhost:8080/evento';
    salvarImagemUrl: string = 'http://localhost:8080/evento/imagem';
    listaDeEventosUrl: string = 'http://localhost:8080/evento';

    constructor(private http: HttpClient){ }

    salvarEvento(evento: Evento){
        return this.http.post(this.salvarEventoUrl, evento);
    }

    salvarImagem(file: File): Observable<HttpEvent<{}>>{
        const formData: FormData = new FormData();
        formData.append('file', file);
        const newRequest = new HttpRequest('POST', this.salvarImagemUrl, formData, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(newRequest);
    }

    exibirEventos() {
        return this.http.get(this.listaDeEventosUrl);
    }
}