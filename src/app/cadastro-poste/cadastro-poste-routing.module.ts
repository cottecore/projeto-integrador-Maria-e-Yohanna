import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPostePage } from './cadastro-poste.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPostePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPostePageRoutingModule {}
