import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationApprenantPage } from './evaluation-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationApprenantPageRoutingModule {}
