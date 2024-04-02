import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Etapa1Page } from '../apresentacao/etapa1/etapa1.page';
import { Etapa2Page } from '../apresentacao/etapa2/etapa2.page';
import { Etapa3Page } from '../apresentacao/etapa3/etapa3.page';

import { IonicModule } from '@ionic/angular';

import { ApresentacaoPageRoutingModule } from './apresentacao-routing.module';

import { ApresentacaoPage } from './apresentacao.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApresentacaoPageRoutingModule
  ],
  declarations: [ApresentacaoPage, Etapa1Page, Etapa2Page, Etapa3Page],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ApresentacaoPageModule {}
