import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { ExibirEventoComponent } from './exibir-evento/exibir-evento.component';

const routes: Routes = [
  { path: 'evento/novo', component: CadastrarEventoComponent },
  { path: 'eventos', component: ExibirEventoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
