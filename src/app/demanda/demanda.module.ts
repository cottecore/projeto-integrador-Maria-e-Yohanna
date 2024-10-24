import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandaPageRoutingModule } from './demanda-routing.module';

import { DemandaPage } from './demanda.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandaPageRoutingModule,
    MenuPageModule
  ],
  declarations: [DemandaPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class DemandaPageModule {}
