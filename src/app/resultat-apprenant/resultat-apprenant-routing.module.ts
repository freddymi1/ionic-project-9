import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatApprenantPage } from './resultat-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatApprenantPageRoutingModule {}
