import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLampadaPageRoutingModule } from './lista-lampada-routing.module';

import { ListaLampadaPage } from './lista-lampada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLampadaPageRoutingModule
  ],
  declarations: [ListaLampadaPage]
})
export class ListaLampadaPageModule {}
