import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComentarioPage } from './cadastro-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroComentarioPageRoutingModule {}
