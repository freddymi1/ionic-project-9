import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatApprenantPageRoutingModule } from './resultat-apprenant-routing.module';

import { ResultatApprenantPage } from './resultat-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatApprenantPageRoutingModule
  ],
  declarations: [ResultatApprenantPage]
})
export class ResultatApprenantPageModule {}
