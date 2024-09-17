import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

import { IonicModule } from '@ionic/angular';

import { GraficoPageRoutingModule } from './grafico-routing.module';

import { GraficoPage } from './grafico.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoPageRoutingModule,
    ChartModule,
    MenuPageModule

  ],
  declarations: [GraficoPage]
})
export class GraficoPageModule {}
