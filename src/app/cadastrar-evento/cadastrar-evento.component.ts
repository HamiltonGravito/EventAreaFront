import { Component, OnInit } from '@angular/core';
import { Evento } from '../shared/evento.model';
import { EventoService } from '../service/evento.service';
import { Form, FormGroup } from '@angular/forms';
import { Endereco } from '../shared/endereco.model';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.css']
})
export class CadastrarEventoComponent implements OnInit {

  evento: Evento;
  endereco: Endereco;
  fileUploadProgresso: string = null;
  previewUrl: any = null;

  constructor(private service: EventoService) { }

  ngOnInit(): void {
    this.evento = new Evento();
    this.endereco = new Endereco();
  }

  salvarEvento(formEvento: FormGroup): void{
    console.log(this.evento);
    this.evento.imagem = null;
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

  salvarImagem(formImagem: FormGroup): void {
    const formData: FormData = new FormData();
    formData.append('file', this.evento.imagem);
    this.service.salvarImagem(formData)
      .subscribe(resp => {
        console.log(resp)
        $(function () {
          $('#modalImagem').modal('hide');
       });
    });
  }

fileProgress(fileInput: any) {
    this.evento.imagem = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.evento.imagem.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.evento.imagem); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}

}
