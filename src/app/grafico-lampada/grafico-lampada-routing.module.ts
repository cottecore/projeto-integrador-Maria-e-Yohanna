import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoLampadaPage } from './grafico-lampada.page';

const routes: Routes = [
  {
    path: '',
    component: GraficoLampadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficoLampadaPageRoutingModule {}
