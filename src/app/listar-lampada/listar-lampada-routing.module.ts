import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarLampadaPage } from './listar-lampada.page';

const routes: Routes = [
  {
    path: '',
    component: ListarLampadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarLampadaPageRoutingModule {}
