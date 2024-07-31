import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPostePageRoutingModule } from './listar-poste-routing.module';

import { ListarPostePage } from './listar-poste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPostePageRoutingModule
  ],
  declarations: [ListarPostePage]
})
export class ListarPostePageModule {}
