import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacadconjPage } from './listacadconj.page';

const routes: Routes = [
  {
    path: '',
    component: ListacadconjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacadconjPageRoutingModule {}
