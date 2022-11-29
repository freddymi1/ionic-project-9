import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetFormateurPageRoutingModule } from './projet-formateur-routing.module';

import { ProjetFormateurPage } from './projet-formateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetFormateurPageRoutingModule
  ],
  declarations: [ProjetFormateurPage]
})
export class ProjetFormateurPageModule {}
