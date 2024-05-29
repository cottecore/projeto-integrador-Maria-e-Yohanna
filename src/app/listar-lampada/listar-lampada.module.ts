import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarLampadaPageRoutingModule } from './listar-lampada-routing.module';

import { ListarLampadaPage } from './listar-lampada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarLampadaPageRoutingModule
  ],
  declarations: [ListarLampadaPage]
})
export class ListarLampadaPageModule {}
