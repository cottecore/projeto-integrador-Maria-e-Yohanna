import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuPageModule } from '../menu/menu.module';


import { IonicModule } from '@ionic/angular';

import { CadastroComentarioPageRoutingModule } from './cadastro-comentario-routing.module';

import { CadastroComentarioPage } from './cadastro-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroComentarioPageRoutingModule, 
    MenuPageModule
  ],
  declarations: [CadastroComentarioPage]
})
export class CadastroComentarioPageModule {}
