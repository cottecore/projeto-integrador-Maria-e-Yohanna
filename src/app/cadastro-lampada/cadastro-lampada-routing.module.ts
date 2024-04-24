import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLampadaPage } from './cadastro-lampada.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLampadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLampadaPageRoutingModule {}
