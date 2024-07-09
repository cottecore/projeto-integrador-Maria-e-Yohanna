import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPostePageRoutingModule } from './cadastro-poste-routing.module';

import { CadastroPostePage } from './cadastro-poste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPostePageRoutingModule
  ],
  declarations: [CadastroPostePage]
})
export class CadastroPostePageModule {}
