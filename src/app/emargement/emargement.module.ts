import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmargementPageRoutingModule } from './emargement-routing.module';

import { EmargementPage } from './emargement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmargementPageRoutingModule
  ],
  declarations: [EmargementPage]
})
export class EmargementPageModule {}
