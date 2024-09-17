import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPostePageRoutingModule } from './lista-poste-routing.module';

import { ListaPostePage } from './lista-poste.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPostePageRoutingModule,
     MenuPageModule
  ],
  declarations: [ListaPostePage]
})
export class ListaPostePageModule {}
