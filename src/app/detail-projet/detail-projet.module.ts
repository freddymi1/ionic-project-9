import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProjetPageRoutingModule } from './detail-projet-routing.module';

import { DetailProjetPage } from './detail-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProjetPageRoutingModule
  ],
  declarations: [DetailProjetPage]
})
export class DetailProjetPageModule {}
