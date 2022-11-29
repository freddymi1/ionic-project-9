import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationApprenantPageRoutingModule } from './evaluation-apprenant-routing.module';

import { EvaluationApprenantPage } from './evaluation-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationApprenantPageRoutingModule
  ],
  declarations: [EvaluationApprenantPage]
})
export class EvaluationApprenantPageModule {}
