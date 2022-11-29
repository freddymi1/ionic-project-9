import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprenantGroupePageRoutingModule } from './apprenant-groupe-routing.module';

import { ApprenantGroupePage } from './apprenant-groupe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprenantGroupePageRoutingModule
  ],
  declarations: [ApprenantGroupePage]
})
export class ApprenantGroupePageModule {}
