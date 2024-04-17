import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEmailPageRoutingModule } from './lista-email-routing.module';

import { ListaEmailPage } from './lista-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEmailPageRoutingModule
  ],
  declarations: [ListaEmailPage]
})
export class ListaEmailPageModule {}
