import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandaPageRoutingModule } from './demanda-routing.module';

import { DemandaPage } from './demanda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandaPageRoutingModule
  ],
  declarations: [DemandaPage]
})
export class DemandaPageModule {}
