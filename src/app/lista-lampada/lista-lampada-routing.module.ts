import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLampadaPage } from './lista-lampada.page';

const routes: Routes = [
  {
    path: '',
    component: ListaLampadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaLampadaPageRoutingModule {}
