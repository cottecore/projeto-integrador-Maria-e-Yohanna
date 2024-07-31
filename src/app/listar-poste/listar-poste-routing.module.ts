import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPostePage } from './listar-poste.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPostePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPostePageRoutingModule {}
