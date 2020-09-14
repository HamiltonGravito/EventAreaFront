import { Component, OnInit } from '@angular/core';
import { Evento } from '../shared/evento.model';
import { EventoService } from '../service/evento.service';
import { FormGroup } from '@angular/forms';
import { Endereco } from '../shared/endereco.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.css'],
  providers: [EventoService]
})
export class CadastrarEventoComponent implements OnInit {

  evento: Evento;
  endereco: Endereco;
  fileimg: File;
  progress: { percentage: number } = { percentage: 0 };
  previewUrl: any = null;
  
  constructor(private service: EventoService) { }

  ngOnInit(): void {
    this.evento = new Evento();
    this.endereco = new Endereco();
  }

  salvarEvento(formEvento: FormGroup): void{
    console.log(this.evento);
    this.service.salvarEvento(this.evento)
    .subscribe(resposta => {
      console.log(resposta);
    })
  }

  salvarEndereco(formEndereco: FormGroup): void {
    this.evento.endereco = formEndereco.value;
    $(function () {
      $('#modalEndereco').modal('hide');
   });
  }

  salvarImagem(): void {
    this.service.salvarImagem(this.fileimg)
      .subscribe((event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        }else if(event instanceof HttpResponse){
          console.log(event.body);
          this.evento.imagemPath = JSON.stringify(event.body);
          console.log(this.evento.imagemPath);
          $(function () {
            $('#modalImagem').modal('hide');
          });
        }
      }), error => {
        console.log(error.message);
      })   
  }

  //Exibir preview da Imagem (Recebo um evento do tipo input, dentro desse evento acesso e mostro o File escolhido)
  preview(fileInput: any, formImagem: FormGroup) {
    this.fileimg = <File>fileInput.target.files[0];
    console.log(this.fileimg);
    var mimeType = this.fileimg.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileimg); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }

  visualizarEvento(){

  }

}
