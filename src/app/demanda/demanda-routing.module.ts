import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandaPage } from './demanda.page';

const routes: Routes = [
  {
    path: '',
    component: DemandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandaPageRoutingModule {}
