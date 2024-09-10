import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConjuntoGraficoPage } from './conjunto-grafico.page';

const routes: Routes = [
  {
    path: '',
    component: ConjuntoGraficoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConjuntoGraficoPageRoutingModule {}
