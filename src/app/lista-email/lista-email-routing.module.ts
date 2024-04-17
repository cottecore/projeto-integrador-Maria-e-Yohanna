import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEmailPage } from './lista-email.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEmailPageRoutingModule {}
