import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPostePage } from './lista-poste.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPostePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPostePageRoutingModule {}
