import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoLampadaPageRoutingModule } from './grafico-lampada-routing.module';

import { GraficoLampadaPage } from './grafico-lampada.page';
import { ChartModule } from 'primeng/chart';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoLampadaPageRoutingModule,
    ChartModule,
    MenuPageModule
  ],
  declarations: [GraficoLampadaPage]
})
export class GraficoLampadaPageModule {}
