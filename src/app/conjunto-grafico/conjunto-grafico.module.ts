import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConjuntoGraficoPageRoutingModule } from './conjunto-grafico-routing.module';

import { ConjuntoGraficoPage } from './conjunto-grafico.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConjuntoGraficoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [ConjuntoGraficoPage]
})
export class ConjuntoGraficoPageModule {}
