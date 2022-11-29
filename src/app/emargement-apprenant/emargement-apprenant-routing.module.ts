import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmargementApprenantPage } from './emargement-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: EmargementApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmargementApprenantPageRoutingModule {}
