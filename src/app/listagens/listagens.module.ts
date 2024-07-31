import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagensPageRoutingModule } from './listagens-routing.module';

import { ListagensPage } from './listagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagensPageRoutingModule
  ],
  declarations: [ListagensPage]
})
export class ListagensPageModule {}
