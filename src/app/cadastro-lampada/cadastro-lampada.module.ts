import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLampadaPageRoutingModule } from './cadastro-lampada-routing.module';

import { CadastroLampadaPage } from './cadastro-lampada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLampadaPageRoutingModule
  ],
  declarations: [CadastroLampadaPage]
})
export class CadastroLampadaPageModule {}
