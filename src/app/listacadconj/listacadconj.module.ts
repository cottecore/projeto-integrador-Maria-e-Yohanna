import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacadconjPageRoutingModule } from './listacadconj-routing.module';

import { ListacadconjPage } from './listacadconj.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacadconjPageRoutingModule,
    MenuPageModule

  ],
  declarations: [ListacadconjPage]
})
export class ListacadconjPageModule {}
