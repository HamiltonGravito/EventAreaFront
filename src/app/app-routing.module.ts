import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';

const routes: Routes = [
  {path: 'evento/novo', component: CadastrarEventoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
