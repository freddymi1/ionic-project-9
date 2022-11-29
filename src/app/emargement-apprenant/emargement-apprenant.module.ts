import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmargementApprenantPageRoutingModule } from './emargement-apprenant-routing.module';

import { EmargementApprenantPage } from './emargement-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmargementApprenantPageRoutingModule
  ],
  declarations: [EmargementApprenantPage]
})
export class EmargementApprenantPageModule {}
