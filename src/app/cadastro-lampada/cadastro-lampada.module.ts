import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLampadaPageRoutingModule } from './cadastro-lampada-routing.module';

import { CadastroLampadaPage } from './cadastro-lampada.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLampadaPageRoutingModule,
    MenuPageModule
  ],
  declarations: [CadastroLampadaPage]
})
export class CadastroLampadaPageModule {}
