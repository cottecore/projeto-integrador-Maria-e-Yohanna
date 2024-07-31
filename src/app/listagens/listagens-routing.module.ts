import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagensPage } from './listagens.page';

const routes: Routes = [
  {
    path: '',
    component: ListagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagensPageRoutingModule {}
